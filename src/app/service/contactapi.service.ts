import { Injectable } from '@angular/core';
import { Contactmodel } from '../Model/contactmodel';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { catchError } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class ContactapiService {
 
  //apiServer = "http://localhost:3000/contacts"; // Replace the api /url json.server

  apiServer ="http://localhost:5073/api/GetAllContacts";
  constructor(private http:HttpClient) { }
  
  GetAllContact():Observable<Contactmodel[]>{

    return this.http.get<Contactmodel[]>(this.apiServer )
    .pipe(
      catchError(this.errorHandler)
    )
}

GetContactById(id:any):Observable<Contactmodel>{

  return this.http.get<Contactmodel>(this.apiServer +'/'+ id)
  .pipe(
    catchError(this.errorHandler)
  )
}

CreateContact(contactdata:any){
  return this.http.post(this.apiServer,contactdata)
  .pipe(
    catchError(this.errorHandler)
  )
}

UpdateContact(id:any,contactdata:any){
  return this.http.put(this.apiServer + '/'+id,contactdata)
  .pipe(
    catchError(this.errorHandler)
  )
}

DeleteContactbyId(id:any){
  return this.http.delete(this.apiServer +'/'+ id) .pipe(
    catchError(this.errorHandler)
  )
}

errorHandler(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}



