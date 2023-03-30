import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //取得樣板變數HTML:#nameInput
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAdd(){
    const ingredient = {name: this.nameInput.nativeElement.value,
                        amount: parseInt(this.amountInput.nativeElement.value)};
    this.shoppingService.addIngredient(ingredient);
  }
}