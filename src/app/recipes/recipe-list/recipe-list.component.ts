import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    standalone: true,
    imports: [RecipeItemComponent]
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://realfood.tesco.com/media/images/Gong-bao-chicken-1400x919-6376346b-85c1-4365-bfe8-54ac7bca9913-0-1400x919.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://realfood.tesco.com/media/images/Gong-bao-chicken-1400x919-6376346b-85c1-4365-bfe8-54ac7bca9913-0-1400x919.jpg')
  ]
}
