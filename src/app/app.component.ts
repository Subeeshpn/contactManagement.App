import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Contactmodel } from './Model/contactmodel';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ContactAddEditComponent } from './contact-add-edit/contact-add-edit.component';
import { response } from 'express';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ContactapiService } from './service/contactapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Contacts App';

  ngOnInit(): void {
    this.LoadContacts();
  }

  displayColums: string[] = [
    'Id',
    'firstname',
    'lastname',
    'emailid',
    'action',
  ];

  constructor(private _dailog: MatDialog, private api: ContactapiService) {}

  contactdata!: Contactmodel[];

  openAddEditContactForm() {
    this._dailog.open(ContactAddEditComponent);
  }

  Openpopup(id: any) {
    const _popup = this._dailog.open(ContactAddEditComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id,
      },
    })
    _popup.afterClosed().subscribe(r=>{
      this.LoadContacts();
    });
  }

  LoadContacts() {
    this.api.GetAllContact().subscribe(response => {
      this.contactdata = response;
      console.log(response);
    });
  }
  EditContct(id:any){
    this.Openpopup(id);
  }
  DeleteContact(Id:any){
    this.api.DeleteContactbyId(Id).subscribe(r=>{
      this.LoadContacts();
    });
  }
}
