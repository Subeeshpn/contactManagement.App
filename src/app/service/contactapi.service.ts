import { Injectable } from '@angular/core';
import { Contactmodel } from '../Model/contactmodel';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};
@Injectable({
  providedIn: 'root'
})
export class ContactapiService {

  apiServer = "http://localhost:3000/contacts";

  constructor(private http:HttpClient) { }
  
  GetAllContact():Observable<Contactmodel[]>{

    return this.http.get<Contactmodel[]>(this.apiServer );
}

GetContactById(id:any):Observable<Contactmodel>{

  return this.http.get<Contactmodel>(this.apiServer +'/'+ id);
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