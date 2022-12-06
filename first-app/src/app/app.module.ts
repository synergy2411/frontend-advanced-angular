import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './components/nested/parent/parent.component';
import { ChildComponent } from './components/nested/child/child.component';
import { UserImgComponent } from './components/user-list/user-img/user-img.component';
import { UserInfoComponent } from './components/user-list/user-info/user-info.component';
// import { TodoComponent } from './component/todo/todo.component';
import { TodoActionComponent } from './components/todo/todo-action/todo-action.component';
import { TodoComponent } from './components/todo/todo.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { UserCommentComponent } from './components/user-list/user-comment/user-comment.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CommentFormComponent } from './components/user-list/comment-form/comment-form.component';
import { LoginComponent } from './components/login/login.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ParentComponent,
    ChildComponent,
    UserImgComponent,
    UserInfoComponent,
    TodoComponent,
    TodoActionComponent,
    LifeCycleDemoComponent,
    UserCommentComponent,
    AppHighlightDirective,
    BetterHighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    SortPipe,
    FilterPipe,
    CommentFormComponent,
    LoginComponent,
    ObservableDemoComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  // providers: [DataService],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
