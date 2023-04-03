import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    /*this.recipeService.getRecipes()
    .subscribe((res) =>{
      console.log(res);
      this.recipeList = this.recipeService.recipes;
    });*/
    this.recipeList = this.recipeService.recipes;
  }

  onNewRecipe(){
    
  }
}