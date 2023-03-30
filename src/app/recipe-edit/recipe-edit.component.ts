import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.index = params['idx'];
      }
    })
  }

}