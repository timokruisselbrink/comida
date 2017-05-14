import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'recipe-card',
    templateUrl: './recipe_card.component.html',
    styleUrls: ['./recipe_card.component.scss']
}) 
export class RecipeCardComponent {    
    @Input() recipe: any;        
    isFlipped: boolean;

    setActive(): void {
        this.isFlipped = true;
    }

    setInactive(): void {
        this.isFlipped = false;
    }
}