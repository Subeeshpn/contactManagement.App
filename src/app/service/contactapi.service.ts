import { Injectable } from '@angular/core';
import { Contactmodel } from '../Model/contactmodel';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactapiService {
 
  

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
  return throwError(errorMessage);
}

}



