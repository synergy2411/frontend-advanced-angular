# Various JavaScript Libraries and Frameworks

## Client Side

- JQuery : Remote Server Call (AJAX Calls), DOM manipulation, Animation
- React (30kb): SPA, State management, templates, component based, code reusability, Virtual DOM
- Vue : Template oriented, Virtual DOM, "Evan You", emerging library
- KnockoutJS : MVVM Pattern; 2 way data binding
- BackboneJS : MVC Pattern at client side
- D3JS : Creating Charts
- Stencil : Component based, Virtual DOM, Web Components
- Polymer : Cutomized Web Component
- LWC : Customized Web Component, Salesforce Team
- Svellte : very new library
- Solid : based on React concepts
- Preact (5kb) : based on React Concepts
- _Angular (2011) : SPA, State Management, Templates, Components, MV_, 2 way data binding, DOM manipulation, XHR Calls, Shadow DOM, Google Team etc
  > v1.x - Library (2011 - 2014) - AngularJS
  > v2.x onwards - Framework (2014 onwards) - Angular
  > 3 Languages - JavaScript, TypeScript, DART
- \*Ember (2010) : frequent changes in API

## Server-Side

- NodeJS : Platform to run JS code on Server-side
- ExpressJS : Framework to create Web Apps
- Hapi
- Koa
- Sails
- Kracken

# Setting Compilation Context

- npm init -y
- npm i typescript
- npx tsc --init
- Change the script in package.json
  > "compile" : "tsc --watch"
- npm run compile

# Decorators - simple function, prefixed with '@', meta-programming

- Classes : @NgModule, @Component, @Directive,....
- Methods : @HostListener()
- Properties : @Input(), @Output(), @HostBinding()
- Parameters : @Optional(), @Inject()

# Angular - 5 building blocks

- Module : ES6 Classes + @NgModule({ })
- Component : ES6 Classes + @Component( { } )
- Directive : ES6 Classes + @Directive({ })
- Services : ES6 Classes + @Injectable({ })
- Pipe : ES6 Classes + @Pipe({ })

@NgModule({ })
class RootModule{
@Input()
user : string;
@HostListener()
onmouseleave( @Optional() name : string){}
}

# Module Systems

- CommonJS Module System - Default for NODEJS
- require()
- module.exports

- ES Module - Default for Browser
- import
- export

 <!-- <script src="" type="module"> -->

# npx create-react-app <project-name>

# Angular Boilerplate Project

- npm i @angular/cli -g
- ng new <project-name>

- ng generate component components/user-list
- ng g c components/user-list

- ng g c components/nested/parent
- ng g c components/nested/child

## Data Projection / Content Projection

- <ng-content> : can display the projected data in child

## Component Types

- Smart / Container / Parent Components

  > they contain business logic / Model / Data
  > they contain other component

- Dumb / Presentaional / Child Components

  > they don't have associated model; receive the model from parent component
  > Receive data from parent to create the UI

## Steps for creating Comments-

- Create IComment Interface
- Create "comments" property type in IUser interface
- Make some comments in mocks.ts file for each user
- supply the "user.comments" to user-comment component
- use "\*ngFor" to display all comments in user-comment component template

## Life Cycle methods -

1. \*ngOnChanges : Whenever @Input() property changes
2. \*ngOnInit : When component intialize
3. \*\*ngDoCheck : when data / model changes
4. \*ngAfterContentInit : after component receive content from parent <ng-content> (Data/Content Projection)
5. \*\*ngAfterContentChecked : after the received ng-content
6. \*ngAfterViewInit : When the view is initialized
7. \*\*ngAfterViewChecked : after the vieew is ready to load
8. \*ngOnDestroy : When the component is about to destroy

- - fires only once
    \*\* - fires everytime whenever the model changes

# Directive : special markups, 3 types -

- Component
- Structural : change the DOM Layout. eg. *ngFor, *ngIf, \*ngSwitch
- Attribute : change the appearance of template. eg. ngStyle, ngClass

- @HostListener("event") : listens to any event on the host element
- @HostBinding("property) : Bind the host element attribute to the property available in Class.

# Pure Change : Changes in the primitive value

let xyz = "Hello"

# Impure Change : Change in Reference / Object Value

let user = { name : "Foo" };
user.name = "Bar"

user = { // Pure Change
name : "Bam"
}

let fruits = ["", "", ""];

fruits.push("") // impure change

fruits = ["", "", "", ""] // Pure Change

# FORMS

- TEMPLATE DRIVEN : validation logic inside the template eg. required, email, minlength
- REACTIVE / MODEL DRIVEN :

# Form and Form Control States/Classes

> valid / invalid
> touched / untouched
> dirty / pristine

# Directives

- Attributes Directive - ngClass, ngStyle
- Custom Directive : ng g d <path>
- ElementRef -> Access the reference of native DOM Element
- @HostListener() : Listens to event occured on the host element:
- @HostBinding() : Binds the host element attribute to the Class property

# Pipe : Formatting the data on the UI

# Forms :

- Template driven
- Model Driven / Reactive Forms

# Service :

- implements DI Concept
- Injectable blocks/classes

UserListComp -> DataService -> Mocks.ts

# Observables - stream on which data flow at different time interval

- series of data
- Are cancelable
- Can be both Async / Sync
- various methods to work on data
- .subscribe(dataHandlerFn, errorHandlerFn, completeFn)
- Lazily executed : Don't execute until subscribe
- Keeps an eye on DataSource / Observe the DataSource
- RxJS Library - reactivex.io
- Powerful Operators support

# Promise

- handles data in one shot
- resolve / reject. Can't stop the execution in between
- Always Async
- .then((response)=>{}) / Async...await
- Eagerly executed -
