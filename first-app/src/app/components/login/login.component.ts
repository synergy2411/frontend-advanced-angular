import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.email]),
      password: new FormControl()       // required, minLength(6)
    })
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}
