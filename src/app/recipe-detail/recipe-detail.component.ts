import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
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