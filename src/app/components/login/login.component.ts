import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormArray , Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  Admindiv =false;
  userdiv = false;
  constructor(public fb: FormBuilder ,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
   console.log(this.loginForm);
   if (this.loginForm.value.email == 'admin@axtrion.com' && this.loginForm.value.password == 'Password@123') {
     const adminData = {name: 'admin' , email : 'admin@axtrion.com' , role: 'admin'};
     localStorage.setItem('adminData' , JSON.stringify(adminData));
     this.router.navigate(['/dashboard']);
    } else if (this.loginForm.value.email == 'user@axtrion.com' && this.loginForm.value.password == 'Password@123') {
      const userData = {name: 'user' , email : 'user@axtrion.com' , role: 'user'};
      localStorage.setItem('userData' , JSON.stringify(userData));
      this.router.navigate(['/dashboard']);
    }
  }
}
