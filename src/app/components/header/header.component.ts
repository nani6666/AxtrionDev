import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 windowWidth = window.innerWidth;
 toggleflag: boolean;
 profileflag: boolean;
 userslist = false;
 name: any ;
  constructor(private router: Router) { }
  ngOnInit() {
    const getdatAdmin = localStorage.getItem('adminData');
    if (getdatAdmin != null) {
      this.name = JSON.parse(getdatAdmin);
      if (this.name.role == 'admin') {
      this.userslist = true;
      }
   } else {
    const getdatUser = localStorage.getItem('userData');
    this.name = JSON.parse(getdatUser);
    if (this.name.role == 'user') {
      this.userslist = false;
      }
   }

  }
    logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
   }
  profileflagactive() {
  this.profileflag = !this.profileflag;
  }
  hamburger() {
    this.toggleflag = !this.toggleflag ;
  }

}
