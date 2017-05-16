import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';

import { StarRatingComponent } from '../../shared'

@NgModule({
  imports: [
    CommonModule,
    AddRecipeRoutingModule,
    FormsModule
  ],
  declarations: [
    AddRecipeComponent,
    StarRatingComponent
  ]
})
export class AddRecipeModule { }
