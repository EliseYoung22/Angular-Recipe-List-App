import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test desc', 'http://res.cloudinary.com/devsvbpxr/image/upload/v1494051423/bowl_a27g7s.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
