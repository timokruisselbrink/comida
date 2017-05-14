import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecipesComponent } from './my-recipes.component'

const routes: Routes = [
  { path: '', component: MyRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecipesRoutingModule { }
