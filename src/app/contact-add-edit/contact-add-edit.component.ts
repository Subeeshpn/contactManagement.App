//import { MaterialModule } from 'src/MaterialModule';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { ContactapiService } from '../service/contactapi.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { response } from 'express';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss'],
})
export class ContactAddEditComponent implements OnInit {
  editdata: any;
  constructor(
    private builder: FormBuilder,
    private dialog: MatDialog,
    private api: ContactapiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.Id != '' && this.data.Id != null) {
      this.api.GetContactById(this.data.Id).subscribe((response) => {
        this.editdata = response;
        this.contactform.setValue({
          Id: this.editdata.id,
          FirstName: this.editdata.firstname,
          LastName: this.editdata.LastName,
          EmailId: this.editdata.emailid,
        });
      });
    }
  }
  contactform = this.builder.group({
    Id: this.builder.control({ value: '', disabled: true }),
    FirstName: this.builder.control('', Validators.required),
    LastName: this.builder.control('', Validators.required),
    EmailId: this.builder.control('', Validators.required),
  });

  SaveContact() {
    //alert('SaveContact');
    if (this.contactform.valid) {
      const Editid = this.contactform.getRawValue().Id;
      if (Editid != '' && Editid != null) {
        this.api.UpdateContact(Editid, this.contactform.getRawValue()).subscribe((response) => {
            this.closepopup();
            alert('updated successfully');
          });
      } else {
        this.api.CreateContact(this.contactform.value).subscribe((response) => {
          this.closepopup();
          alert('Saved successfully');
        });
      }
    }
  }

  closepopup() {
    this.dialog.closeAll();
  }
}