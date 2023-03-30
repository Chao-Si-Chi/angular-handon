import { provideImageKitLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  index;
  recipe: Recipe;
  isOpen = false;
  constructor(private route: ActivatedRoute, 
              private recipeService: RecipeService, 
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.index = params['idx'];
        this.getRecipe();
      }
    });
  }

  getRecipe(){
    this.recipe = this.recipeService.getRecipe(this.index);
  }

  dropDownOpen(){
    this.isOpen = !this.isOpen
  }

  addShoppingList(){
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingService.addIngredient(ingredient);
    })
    
  }

}