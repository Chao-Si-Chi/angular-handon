import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList = [];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredientList = this.shoppingService.ingredients
  }

}