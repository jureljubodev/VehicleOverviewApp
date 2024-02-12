import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from 'src/app/validators/password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  loginForm: FormGroup;
  loginFormPressed: boolean;

  constructor(private router: Router) {
    this.loginFormPressed = false;
    this.loginForm = new FormGroup(
      {
        Username: new FormControl(null, [Validators.required]),
        Password: new FormControl(null, [Validators.required]),
      },
      {
        validators: matchPassword,
      }
    );
  }

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(['/home']);
    this.loginFormPressed = false;
  }
  ngOnInit(): void {}
}
