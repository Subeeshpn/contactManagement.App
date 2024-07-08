import { Injectable } from '@angular/core';
import { Contactmodel } from '../Model/contactmodel';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ContactapiService {
 
  apiServer = "http://localhost:3000/contacts"; // Replace the api url 

  constructor(private http:HttpClient) { }
  
  GetAllContact():Observable<Contactmodel[]>{

    return this.http.get<Contactmodel[]>(this.apiServer );
}

GetContactById(id:any):Observable<Contactmodel>{

  return this.http.get<Contactmodel>(this.apiServer +'/'+ id)
}

CreateContact(contactdata:any){
  return this.http.post(this.apiServer,contactdata);
}

UpdateContact(id:any,contactdata:any){
  return this.http.put(this.apiServer + '/'+id,contactdata)
}

DeleteContactbyId(id:any){
  return this.http.delete(this.apiServer +'/'+ id);
}


}

