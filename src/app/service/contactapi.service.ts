import { Injectable } from '@angular/core';
import { Contactmodel } from '../Model/contactmodel';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ContactapiService {
 
  
 // apiUrl variable used to set the api url, according to your url replace 
  private apiUrl ="http://localhost:5073/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { } 
  

  
  GetAllContact():Observable<Contactmodel[]>{

    return this.http.get<Contactmodel[]>(this.apiUrl + '/GetAllContacts' )
    .pipe(
      catchError(this.errorHandler)
    )
}

GetContactById(id:any):Observable<Contactmodel>{

  return this.http.get<Contactmodel>(this.apiUrl +'/Contact/' + id, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

CreateContact(contactdata:any){
  return this.http.post(this.apiUrl + '/Contact',JSON.stringify(contactdata),this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

UpdateContact(id:any,contactdata:any){
  return this.http.put(this.apiUrl + '/Contact/'+id,JSON.stringify(contactdata),this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

DeleteContactbyId(id:any){
  return this.http.delete(this.apiUrl + '/Contact/' + id, this.httpOptions).pipe(
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
  return  throwError(() => errorMessage)
}

}



