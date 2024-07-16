import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Contactmodel } from './Model/contactmodel';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ContactAddEditComponent } from './contact-add-edit/contact-add-edit.component';
import { response } from 'express';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Sort, MatSortModule } from '@angular/material/sort';
import { ContactapiService } from './service/contactapi.service';
import { HttpClient } from '@angular/common/http';
import * as alertify from 'alertifyjs';
import { Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

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

  // displayColums: string[] = [
  //   'id',
  //   'firstname',
  //   'lastname',
  //   'emailid',
  //   'Edit',
  //   'Delete',
  // ];
  columnDefinitions = [
    { def: "id", label: "ID", visible: false },
    {
      def: "firstname",
      label: "firstname",
      visible: true
    },
    {
      def: "lastname",
      label: "lastname",
      visible: true
    },
    {
      def: "emailid",
      label: "emailid",
      visible: true
    }
    ,
    {
      def: "Edit",
      label: "Edit",
      visible: true
    }
    ,
    {
      def: "Delete",
      label: "Delete",
      visible: true
    }
  ];

  

  constructor(private _dailog: MatDialog, private api: ContactapiService) {}
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;
  contactdata!: Contactmodel[];
  finaldata: any;
  openAddEditContactForm() {
    const _popup =this._dailog.open(ContactAddEditComponent, {
      width: '400px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
    });
    _popup.afterClosed().subscribe((r) => {
      this.LoadContacts();
    });
  }

  Openpopup(id: any) {
    const _popup = this._dailog.open(ContactAddEditComponent, {
      width: '400px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id,
      },
    });
    _popup.afterClosed().subscribe((r) => {
      this.LoadContacts();
    });
  }

  LoadContacts() {
    this.api.GetAllContact().subscribe((response) => {
      this.contactdata = response;
      this.finaldata = new MatTableDataSource<Contactmodel>(this.contactdata);
      this.finaldata.paginator = this._paginator;
      this.finaldata.sort = this._sort;
      console.log(response);
    });
  }
  EditContct(id: any) {
    this.Openpopup(id);
  }
  DeleteContact(id: any) {
    alertify.confirm(
      'Remove Company',
      'do you want remove this company?',
      () => {
        this.api.DeleteContactbyId(id).subscribe((r) => {
          this.LoadContacts();
        });
      },
      function () {}
    );
  }
  applyFilter($event : any){
    this.finaldata.filter = $event.target.value;
  }
  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter(cd => cd.visible).map(cd => cd.def);
  }
}
