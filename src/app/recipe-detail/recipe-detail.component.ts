import { provideImageKitLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  index;
  recipe: Recipe;
  constructor(private route: ActivatedRoute, 
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.index = params['idx'];
      }
    });
  }

  getRecipe(){
    this.recipe = this.recipeService.getRecipe(this.index);
  }

}