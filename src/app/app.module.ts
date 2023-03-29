import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ], 
  declarations: [ AppComponent, HeaderComponent, RecipesComponent, ShoppingListComponent, RecipeListComponent, RecipeEditComponent, ShoppingItemComponent ], 
  bootstrap: [ AppComponent ]
})

export class AppModule{}