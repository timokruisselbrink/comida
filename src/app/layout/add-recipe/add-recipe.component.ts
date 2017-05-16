import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from '../../shared'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  ingredients:string[] = [''];
  constructor() { }

  ingredientChanged(index:number){
    if((this.ingredients.length -1 )==index){
      this.ingredients.push('');
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
  }

}



// user: Observable<User>;
//     recipes: FirebaseListObservable<any[]>;
//     titleVal: string = '';
//     imageUrlVal: string = '/assets/images/';

//     constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
//         this.recipes = af.list('/recipes', {
//         query: {
//             limitToLast: 50
//         }
//         });

//         this.user = this.afAuth.authState;
        
 
//     }

//     login() {
//         this.afAuth.auth.signInAnonymously();
//     }

//     logout() {
//         this.afAuth.auth.signOut();
//     }

//     Save() {
//         this.recipes.push({ title: this.titleVal, imageUrl: this.imageUrlVal});
//         this.titleVal = '';
//         this.imageUrlVal = '/assets/images/';
//     }