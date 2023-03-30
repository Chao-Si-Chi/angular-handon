import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  get ingredients() {
    return this._ingredients;
  }

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
  }
  removeIngredient(index: number) {
    this._ingredients.splice(index, 1);
  }
}
