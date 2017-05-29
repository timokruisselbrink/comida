import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'recipe-card',
    templateUrl: './recipe_card.component.html',
    styleUrls: ['./recipe_card.component.css']
}) 
export class RecipeCardComponent {    
    @Input() recipe: any;        
    private showDetails: boolean;

    setActive(): void {
        this.showDetails = true;
    }

    setInactive(): void {
        this.showDetails = false;
    }
}