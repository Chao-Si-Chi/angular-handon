import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

import { ShoppingService } from './shopping.service';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  get recipes(){
    return this._recipes.slice();
  }

  constructor(private shoppingService : ShoppingService) { }

  getRecipe(index: number) {
    return this._recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient=>{
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
