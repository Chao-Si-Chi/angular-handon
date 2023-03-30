import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeService } from './services/recipe.service';
import { ShoppingService } from './services/shopping.service';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ], 
  declarations: [ AppComponent, HeaderComponent, RecipesComponent, ShoppingListComponent, ShoppingEditComponent, RecipeListComponent, RecipeEditComponent, RecipeItemComponent, RecipeDetailComponent, ShoppingItemComponent, DropdownDirective ], 
  providers: [ RecipeService, ShoppingService ], 
  bootstrap: [ AppComponent ]
})

export class AppModule{}