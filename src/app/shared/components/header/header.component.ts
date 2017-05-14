import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signOut(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl("login");
  }

}
