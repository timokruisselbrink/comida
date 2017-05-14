import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  stateClass:string;
  stateText:string = 'Log in';

  showAlert:boolean;
  alertText:string;

  email:string = 'timokruisselbrink@hotmail.com';
  password:string = 'mario321';

  ngOnInit() {
  }

  login(){


    this.stateClass = "loading";
    this.stateText = "Authenticating";

    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(result => {
      this.stateClass = "ok";
      this.stateText = "Welcome back!";
      this.showAlert = false;
      
      setTimeout(()=> {
        this.router.navigate(["/my-recipes"])
      }, 300);      
      
    }).catch(result => {
      this.stateClass = "";
      this.stateText = "Log in";
      this.alertText = result.message;
      this.showAlert = true;
    });
  }
}

