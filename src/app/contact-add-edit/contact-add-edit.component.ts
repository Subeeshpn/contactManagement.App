//import { MaterialModule } from 'src/MaterialModule';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { ContactapiService } from '../service/contactapi.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { response } from 'express';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as alertify from 'alertifyjs';

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
    
    if (this.data.id != '' && this.data.id != null) {
      this.api.GetContactById(this.data.id).subscribe((response) => {
        this.editdata = response;
        this.contactform.setValue({
          id: this.editdata.id,
          firstname: this.editdata.firstname,
          lastname: this.editdata.lastname,
          emailid: this.editdata.emailid,
        });
      });
    }
  }
  contactform = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    emailid: this.builder.control('', [Validators.required, Validators.email]),
  });

  SaveContact() {
    
    //alert('SaveContact');
    if (this.contactform.valid) {
      const Editid = this.contactform.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.api
          .UpdateContact(Editid, this.contactform.getRawValue())
          .subscribe((response) => {
            this.closepopup();
            alertify.success('updated successfully');
          });
      } else {
        this.api
        .CreateContact(this.contactform.value)
        .subscribe((response) => {
          this.closepopup();
          alertify.success('saved successfully');
        });
      }
    }
   }

  closepopup() {
    this.dialog.closeAll();
  }
}
