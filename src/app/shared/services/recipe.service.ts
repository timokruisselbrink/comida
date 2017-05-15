import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RecipeService {
    constructor(private af: AngularFireDatabase) {}

    getRecipes(): Promise<FirebaseListObservable<any[]>> {
        return Promise.resolve(
            this.af.list('/recipes', {
                query: { limitToLast: 2 }
            })            
        );
    }
}
