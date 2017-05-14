import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRecipesRoutingModule } from './my-recipes-routing.module';
import { MyRecipesComponent } from './my-recipes.component';

import { RecipeCardComponent } from './recipe_card/recipe_card.component';
import { RecipeService } from '../../shared'

@NgModule({
  imports: [
    CommonModule,
    MyRecipesRoutingModule
  ],
  declarations: [
    MyRecipesComponent,
    RecipeCardComponent
  ],
  providers: [
    RecipeService
  ]
})
export class MyRecipesModule { }
