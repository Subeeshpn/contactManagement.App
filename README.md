# ContactManagementApp


About project : 

How to setup environment
how to configure the project for run

Environments and tools 
Node :v20.15.0
NPM :10.7.0
Angular cli : 16.2.14
Angular material : Designed the UI 
json.server   : local debugging and testing 
alertify js used for alert messaging

Tools
Visual studio 2022visual studio codeMS test. Mock, Autofixure
Swagger ui
Project Details : Contact management application. Source code available in github repository.

Two projects created API , Front end
Backend .net core api : Dotnet core api is designed with repository pattern. This api is divided in to repository layer, domain layer, api controller layer. so separation of concern achieved. Dependency injection applied with api. CORS used to make call to front end contact app. Logging implemented with Nloger. Global exception handled with middleware.
This api's can improve with unit of work, generic repository. But as of now no scope for using. Also async not used so  , by using asyn api's , performance again can scale.
angular front end application : crud operations with paging and sorting implemented used angular materal ui for designing the fronend.  But still filtering , input/output/state management not applied. But i not followed input/output/state management Contact's app designed with apiservices, components, modules, material ui, 
jasmin , karma, used for angulr fronend unit testing.
Database is using json file :assumption is database has contact details available. I mean empty scenarios not handled.
Unit testing both Api and front end  but not covered all scenarios
MS test. Mock, Autofixure used for api repository testing Integration test not implemented.
Branching strategy main branch and development branch.Api unit test:
Functionalities competed:
Add new contact
Load all contact
Load Contact by id
Update contact
Delete contact
Sorting contact details
Paging contact details
Alert messages
Global Exception messages from angular app


How to run the application.Downoad the source code from github url. https://github.com/SubeeshpnContact app , fron ent application open in visual studio code 2022 run in broswerContact api project open in visual studio 2022. Load all api in swagger ui.  copy the api address from swagger url like http://localhost:5073/. then paste it in front end angular project. contactapi. service. Location of service  is app/service/contactapi.service.
  Assuming database exists data.
Bug: after adding new contact  , contact listing page is not refreshing. stil fixing.If any doubts contact.

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
