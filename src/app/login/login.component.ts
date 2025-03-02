import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  showPass: boolean = false;

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.pattern(/^[0-9]{3,5}[a-zA-z]{3,5}$/),
      Validators.required,
    ]),
  });

  // show pass
  displaPass() {
    this.showPass = !this.showPass;
  }
  // navData!: any;
  submitForm(form: FormGroup) {
    console.log(form);
    console.log(form.value.email);
    console.log(this.loginForm.valid);
    // this.submit(form);
    // this.navData = form
  }
  localStor() {
    localStorage.setItem('userName', 'Ahmed Weso');
    localStorage.setItem('email', 'ahmedabdalwanes842@gmail.com');
    localStorage.setItem('password', '1111qqqq');
  }
  ngOnInit(): void {
    this.localStor();
  }
  submit(form: FormGroup) {
    console.log(form);
    const userName = form.value.userName;
    const email = form.value.email;
    const password = form.value.password;
    //
    let test = '';
    const userNameStor = localStorage.getItem('userName');
    const emailStor = localStorage.getItem('email');
    const passwordStor = localStorage.getItem('password');
    //
    if (
      userName == userNameStor &&
      email == emailStor &&
      password == passwordStor
    ) {
      test = 'true';
      console.log('passed check');
    } else {
      test = 'false';
      console.log('not passed check');
    }

    sessionStorage.setItem('autherised', test);

    console.log('worked');
  }
  clearStor() {
    localStorage.clear();
  }
}
