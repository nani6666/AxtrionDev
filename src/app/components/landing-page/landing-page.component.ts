import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormArray , Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  Emailform: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
