import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply Test', 'https://i.ndtvimg.com/i/2017-10/meatballs-recipe_620x350_51508494396.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
