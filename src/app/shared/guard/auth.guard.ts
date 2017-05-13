import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public afAuth: AngularFireAuth) { }

    canActivate() {
        if (this.afAuth.auth.currentUser != undefined){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
