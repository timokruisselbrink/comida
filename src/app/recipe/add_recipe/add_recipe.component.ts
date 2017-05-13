import { Component} from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "firebase/app";

@Component({
    selector: 'add-recipe',
    templateUrl: './add_recipe.component.html',
    styleUrls: ['./add_recipe.component.css']
}) 
export class AddRecipeComponent {
    user: Observable<User>;
    recipes: FirebaseListObservable<any[]>;
    titleVal: string = '';
    imageUrlVal: string = '/assets/images/';

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
        this.recipes = af.list('/recipes', {
        query: {
            limitToLast: 50
        }
        });

        this.user = this.afAuth.authState;
        
 
    }

    login() {
        this.afAuth.auth.signInAnonymously();
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    Save() {
        this.recipes.push({ title: this.titleVal, imageUrl: this.imageUrlVal});
        this.titleVal = '';
        this.imageUrlVal = '/assets/images/';
    }
   
}