import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRecipesRoutingModule } from './my-recipes-routing.module';
import { MyRecipesComponent } from './my-recipes.component';

@NgModule({
  imports: [
    CommonModule,
    MyRecipesRoutingModule
  ],
  declarations: [MyRecipesComponent]
})
export class MyRecipesModule { }
