import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { TodoComponent } from "./components/todo/todo.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { LoginGuard } from "./services/gaurd/login.guard";

export const APP_ROUTES: Routes = [
  { path: "login", component: LoginComponent },                                          // http://localhost:4200/login
  {
    path: "users", component: UserListComponent,
    canActivate: [LoginGuard]
  },            // http://localhost:4200/users
  { path: "observable-demo", component: ObservableDemoComponent },                       // http://localhost:4200/observable-demo
  { path: "todos", component: TodoComponent },                                           // http://localhost:4200/todos
  { path: "**", redirectTo: "/login", pathMatch: 'full' }                                // http://localhost:4200/doesnotexist
]
