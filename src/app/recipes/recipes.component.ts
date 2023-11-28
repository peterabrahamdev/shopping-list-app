import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
    standalone: true,
    imports: [RecipeListComponent, RecipeDetailComponent]
})
export class RecipesComponent {
    selectedRecipe: Recipe;

    
}
