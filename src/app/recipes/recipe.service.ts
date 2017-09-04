import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaghetti Bolognaise', 'mmmmmm', 'http://res.cloudinary.com/devsvbpxr/image/upload/v1494051423/bowl_a27g7s.png', [
            new Ingredient('Lentils', 500),
            new Ingredient('Tomatoes', 2),
            new Ingredient('Pasta', 500),
            new Ingredient('Red Wine', 250)
        ]),
        new Recipe('Mexican Bean Bowl', 'burrito bowl', 'http://res.cloudinary.com/devsvbpxr/image/upload/v1494051423/bowl_a27g7s.png', [
            new Ingredient('Refreid Beans', 1),
            new Ingredient('Lettuce', 1),
            new Ingredient('Avocado', 1),
            new Ingredient('Red Onion', 1),
            new Ingredient('Brown Rice', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}