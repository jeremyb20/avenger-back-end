# BetslipUI30

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Edit a file

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Issues 

"noPropertyAccessFromIndexSignature": false,
"strictPropertyInitialization": false,

fix 
https://stackoverflow.com/questions/70106472/property-fname-comes-from-an-index-signature-so-it-must-be-accessed-with-fn


Run  `nodemon` command in root directory for run back-end dev, in  this case should be Desktop/angular-15.

Development environments

Node V16.13.0
Angular v15.1.2
npm v8.1.0

## Para actualizar necesitas varias cosas
En caso de ubuntu 

curl -L https://fly.io/install.sh | sh


//para iniciar sesion

fly auth login

// para subir a prod

fly launch --now