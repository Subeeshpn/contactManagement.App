# ContactManagementApp

About the project 
=========================
Contact management application help to users can handle contact details  with this application.There are wo projects are part of the application API , Front end applications. Backend Api is developed with .net core web api 8. Crud operations implemented in api.Other software engineering practices applied in api's are Solid principles and design patterns. and contact management front end application is developed on Angular 16,  has crud operations with search, paging and sorting implementations used angular materal ui for designing the fronend. Contact's application  features are used with apiservices, components, modules, material ui,reactive forms, form validation,error handling with Interceptor, Alertify messaging system.
 
Setup instructions
===========================

In order to run the application install below software are in your system

Node :v20.15.0
NPM :10.7.0
Angular cli : 16.2.14
Angular material : 
json.server   : 
alertify js 
Visual studio 2022
visual studio code
Swagger ui
Moq

How to run the application
============================

Downoad the source code from github url. https://github.com/SubeeshpnContact app , front ent application open in visual studio code 2022 run in broswer.Contact api project open in visual studio 2022. Load all api in swagger ui.  copy the port number from  api url  then paste it in front end angular project's contactapi  service. Location of service  is app/service/contactapi.service.


Application structure and Design
===============================

Application mainly divident into two parts. Frontend application and backend api's. In a server web-client approach, the server-side application code is kept completely separate from the client code.So Api endpoints are able to share with multiple applications and different clients can consume.

For the client, we can create an app using the Angular CLI. The server-side application has a clear responsibility to provide API endpoints while the client-side of the application strictly handles the user interface.

This api is divided in to repository layer, domain layer, api controller layer. so separation of concern achieved. Future enhancement become easier by following DI of Solid principles, Repositori patterns helps to organize implementations seperately for business logic and db logics. by desinging Api proect helps to consume the services with any type clients.

Domain Layer:

Domain Entity objects are a representation of the database that we are using to store and retrieve data used for the API business logic. Each Entity object will contain the properties represented in our case the SQL table in our case json file.
 
Data Layer:

The next layer of the API architecture we will look at is the Data Layer.The key to the Data Layer is the implementation of each entity repository using the interfaces developed in the Domain Layer. The architecture we are developing for the API uses the Repository Pattern for connecting the API Layer to the Data Layer. Thisis done using Dependency Injection for each of the repository objects we implement.

API Layer:

This layer contains the code for the Web API endpoint logic including the Controllers. The API project for the solution will have a single responsibility, andthat is only to handlethe HTTP requests received by the web server and to return the HTTP responses with either success or failure. There will be a very minimal business logic in this project. We will handle exceptions and errors that have occurred in the Domain or Data projects to effectively communicate with the consumer of APIs. This communication will use HTTP response codes and any data to be returned located in the HTTP response body.

Below listed feature added with api

Dependency injection applied with api. 

CORS used to make call to front end contact app. 

Logging implemented with Nloger. 

Global exception handled with middleware. 


Performance Considerations:
==============================
Always web API is to design with scalability in mind. This means following the principles of RESTful architecture, such as using standard HTTP methods, status codes, and headers, providing clear and consistent endpoints and resources, and supporting content negotiation and caching. You should also use a versioning strategy for your web API.

Another way of scaling your web API is to implement load balancing and horizontal scaling. Load balancing is the process of distributing the incoming requests to your web API across multiple servers or instances, to avoid overloading any single server and improve availability and performance. Horizontal scaling is the process of adding more servers, to increase the capacity and throughput of your web API

Optimize your web API performance means reducing the latency and bandwidth of your web API responses, by applying various optimization techniques, such as compression, minification, pagination, filtering, sorting, and caching.You should also monitor and measure your web API performance, by using tools and metrics, such as response time, error rate, throughput, and availability. You should also implement logging and error handling for your web API 

Use Async versions of methods whenever possible.Secure your web API,Optimize data access,Handling Errors Globally,Using DTOs to Return Results and Accept Inputs. By following all points, any number of contacts would be handled by application.

Current architecture following SOLID Principles, Design patterns, oops , excemption handling. Changing data 
==============================
source to any of the rdbms is easily with current architecture. Because of following the proper architecture contact management application could be easily maintainable and sclable in future.




























This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
