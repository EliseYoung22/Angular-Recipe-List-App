import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'test desc', 'http://res.cloudinary.com/devsvbpxr/image/upload/v1494051423/bowl_a27g7s.png'),
        new Recipe('Another test recipe', 'test desc', 'http://res.cloudinary.com/devsvbpxr/image/upload/v1494051423/bowl_a27g7s.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}