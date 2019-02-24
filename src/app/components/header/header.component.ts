import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 windowWidth = window.innerWidth;
 toggleflag: boolean;
  constructor() { }

  ngOnInit() {
  }

  hamburger() {
    this.toggleflag = !this.toggleflag ;
  }

}
