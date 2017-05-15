import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { RecipeService } from '../../shared';
import { RecipeCardComponent} from './recipe_card/recipe_card.component';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {  
    @ViewChildren(RecipeCardComponent)
    private recipeCardComponents: QueryList<RecipeCardComponent>;

    recipes: FirebaseListObservable<any[]>;    
    
    constructor(private recipeService : RecipeService){}

    ngOnInit(): void {
        this.getRecipes();
    }

    getRecipes(): void {
        this.recipeService.getRecipes().then(recipes => 
            this.recipes = recipes);
    }

    onClick(index: number): void {
        var recipe_card:RecipeCardComponent = this.recipeCardComponents.toArray()[index];
        if(recipe_card.isActive){
            recipe_card.setInactive();
        } else{
           recipe_card.setActive(); 
        }
    }
}