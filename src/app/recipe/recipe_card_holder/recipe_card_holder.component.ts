import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { RecipeCardComponent} from '../recipe_card/recipe_card.component';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'recipe-card-holder',
    templateUrl: './recipe_card_holder.component.html',
    styleUrls: ['./recipe_card_holder.component.css']  
}) 
export class RecipeCardHolderComponent implements OnInit {  
    @ViewChildren(RecipeCardComponent)
    private recipeCardComponents: QueryList<RecipeCardComponent>;
    
    private currentActiveCard: RecipeCardComponent;

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
        if(this.currentActiveCard != undefined){
            this.currentActiveCard.setInactive();
        }
        this.currentActiveCard = this.recipeCardComponents.toArray()[index];
        this.currentActiveCard.setActive();
    }
}