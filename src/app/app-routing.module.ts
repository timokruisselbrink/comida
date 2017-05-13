import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared';

import { AddRecipeComponent } from './recipe/add_recipe/add_recipe.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}