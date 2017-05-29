import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipe/recipe_card/recipe_card.component';
import { RecipeCardHolderComponent} from './recipe/recipe_card_holder/recipe_card_holder.component';
import { AddRecipeComponent } from './recipe/add_recipe/add_recipe.component';

import { RecipeService } from './recipe/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeCardComponent,
    RecipeCardHolderComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
