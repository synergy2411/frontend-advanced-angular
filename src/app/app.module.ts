import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './components/nested/parent/parent.component';
import { ChildComponent } from './components/nested/child/child.component';
import { UserImgComponent } from './components/user-list/user-img/user-img.component';
import { UserInfoComponent } from './components/user-list/user-info/user-info.component';

@NgModule({
  declarations: [     // Component, Directive, Pipe
    AppComponent, UserListComponent, ParentComponent, ChildComponent, UserImgComponent, UserInfoComponent
  ],
  imports: [          // Module - Angular Module / Custom Module
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
