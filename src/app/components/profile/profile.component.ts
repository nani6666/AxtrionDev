import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormArray , Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileform: FormGroup;
  constructor() { }

  ngOnInit() {

    this.profileform = new FormGroup({
      firstName: new FormControl()
   });
  }

}
