import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormArray , Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminloginForm: FormGroup;
  constructor(public fb: FormBuilder ,
              private router: Router) { }

  ngOnInit() {
    this.adminloginForm = this.fb.group({
      email : ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
   console.log(this.adminloginForm);
   if (this.adminloginForm.value.email == 'admin@axtrion.com' && this.adminloginForm.value.password == 'Password@123') {
     const adminData = {name: 'admin' , email : 'admin@axtrion.com' , role: 'admin'};
     localStorage.setItem('adminData' , JSON.stringify(adminData));
     this.router.navigate(['/dashboard']);
    }
  }

}
