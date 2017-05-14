import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public afAuth: AngularFireAuth) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.map((auth) => {
            if (auth == null) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }).first();

    }
   

    // canActivate() {
    //     if (this.afAuth.auth.currentUser != undefined){
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }
}
