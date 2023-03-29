import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const routes: Routes = [
  { path: 'recipes', component: RecipeComponent }, 
  { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})

export class AppRoutingModule{

}