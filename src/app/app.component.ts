import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddEditComponent } from './contact-add-edit/contact-add-edit.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactManagement.App';

 constructor(private _dailog:MatDialog){}

 openAddEditContactForm(){
  this._dailog.open(ContactAddEditComponent);
 }
}


