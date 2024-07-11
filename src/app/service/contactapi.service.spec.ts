import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Contactmodel } from '../Model/contactmodel';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { ContactapiService } from './contactapi.service';


// describe('CustomersService', () => {
//   let service: ContactapiService;
//   let httpSpy: Spy<HttpClient>;
//   let fakeContact: Contactmodel[] = [
//     {
//       id: 1,
//       FirstName: "Fake Contact",
//       LastName: "Fake Contact",
//       EmailId: "fake@fake.com"
//     },
//     {
//       id: 2,
//       FirstName: "Fake Contact2",
//       LastName: "Fake Contact2",
//       EmailId: "fake1@fake.com"
//     }
//   ];

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         ContactapiService,
//         { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
//       ]
//     });

//     service = TestBed.inject(ContactapiService);
//     httpSpy = TestBed.inject<any>(HttpClient);
//   });

//   it('should return an expected list of contacts', (done: DoneFn) => {
//     httpSpy.get.and.nextWith(fakeContact);

//     service.GetAllContact().subscribe(
//       customers => {
//         expect(customers).toHaveSize(fakeContact.length);
//         done();
//       },
//       done.fail
//     );
//     expect(httpSpy.get.calls.count()).toBe(1);
//   });
// });

// describe('ContactService', () => {
//   let service: ContactapiService;
//   let httpSpy: Spy<HttpClient>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         ContactapiService,
//         { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
//       ]
//     });

//     service = TestBed.inject(ContactapiService);
//     httpSpy = TestBed.inject<any>(HttpClient);
//   });

//   it('should create a new contact', (done: DoneFn) => {

//     var newContact = {
//       firstname: "New Customer",
//       LastName :"New Customer",
//       EmailId: "new@customer.com"
//     } as Contactmodel;

//     httpSpy.post.and.nextWith(newContact);

//     service.CreateContact(newContact).subscribe(
//       Contactmodel => {
//         expect(Contactmodel).toEqual(newContact);
//         done();
//       },
//       done.fail
//     );
//     expect(httpSpy.post.calls.count()).toBe(1);
//   });
// });


// describe('Contactapiservice', () => {
//   let service: ContactapiService;
//   let httpSpy: Spy<HttpClient>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         ContactapiService,
//         { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
//       ]
//     });

//     service = TestBed.inject(ContactapiService);
//     httpSpy = TestBed.inject<any>(HttpClient);
//   });

//   it('should return a 404', (done: DoneFn) => {

//     var contactId = "89776683";

//     httpSpy.get.and.throwWith(new HttpErrorResponse({
//           error: "404 - Not Found",
//           status: 404
//     }));

//     service.GetContactById(contactId).subscribe(
//       customer => {
//         done.fail("Expected a 404");
//       },
//       error => {
//         expect(error.status).toEqual(404);
//         done();
//       }
//     );
//     expect(httpSpy.get.calls.count()).toBe(1);
//   });
// });