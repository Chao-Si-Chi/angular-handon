import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const routes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
      { path: ':idx', component: RecipesComponent }, 
      { path: ':idx/edit', component: RecipeEditComponent } 
    ] 
  }, 
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})

export class AppRoutingModule{

}