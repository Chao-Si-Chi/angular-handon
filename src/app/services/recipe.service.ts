import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

import { ShoppingService } from './shopping.service';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //private _recipes: Recipe[];
  private _recipes: Recipe[] 
  = [
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

  constructor(private shoppingService : ShoppingService, 
              private http: HttpClient) { }

  getRecipes() {
    /*return this.http.get('https://ng-firebase-crud-9d43a.firebaseio.com/Recipes.json').pipe(
      map((response: any) =>{
        const postArray = [];
        for(const key in response){
          postArray.push({...response[key], id: key});
        }
        return postArray;
      }), 
      tap((data) =>this._recipes = data));*/
  }

  getRecipe(index: number) {
    return this._recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient=>{
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
