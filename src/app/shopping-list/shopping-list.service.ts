import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('potatoes', 5),
        new Ingredient('bananas', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
}