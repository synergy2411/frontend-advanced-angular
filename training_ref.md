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
