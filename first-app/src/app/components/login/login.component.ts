import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.email]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.pattern(/[a-z]+[!@#$%]?[a-z]+/)
      ])       // required, minLength(6)
    })
  }

  onSubmit() {
    console.log(this.loginForm);
    let { username, password } = this.loginForm.value;
    this.authService.onLogin(username, password);
  }
}
