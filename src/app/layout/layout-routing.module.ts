import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [            
            { path: 'add-recipe', loadChildren: './add-recipe/add-recipe.module#AddRecipeModule' },
            { path: 'my-recipes', loadChildren: './my-recipes/my-recipes.module#MyRecipesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
