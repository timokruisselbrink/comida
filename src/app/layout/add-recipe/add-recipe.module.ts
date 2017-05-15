import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';

@NgModule({
  imports: [
    CommonModule,
    AddRecipeRoutingModule,
    FormsModule
  ],
  declarations: [AddRecipeComponent]
})
export class AddRecipeModule { }
