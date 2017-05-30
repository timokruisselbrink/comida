import { Component, OnInit, ViewChild } from '@angular/core';
import { StarRatingComponent, UploadImageComponent, UploadImageService, Recipe } from '../../shared'
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  @ViewChild(UploadImageComponent) uploadImageComponent: UploadImageComponent

  recipe: Recipe = new Recipe;

  constructor(public uploadImageService: UploadImageService, public af: AngularFireDatabase) { }

  save(){
    this.recipe.instructions.pop();
    this.recipe.ingredients.pop();

    const dbRecipes = this.af.list('/recipes');
    
    dbRecipes.push(this.recipe).then(data => {      
      const lastSavedId = /[^/]*$/.exec(data)[0];
      this.uploadImages(lastSavedId);
    });
  }

  ingredientChanged(index:number){
    if((this.recipe.ingredients.length -1 )==index){
      this.recipe.ingredients.push('');
    }
  }

  instructionChanged(index:number){
    if((this.recipe.instructions.length -1 )==index){
      this.recipe.instructions.push('');
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  uploadImages(recipeId:string){    
    this.uploadImageService.uploadImagesToFirebase(this.uploadImageComponent.getFilesToUpload(), recipeId);
  }

  ngOnInit() {
  }


}

