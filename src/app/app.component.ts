import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { DropdownDirective } from './shared/dropdown.directive';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [HeaderComponent, RecipesComponent, ShoppingListComponent, RouterModule, RouterOutlet, DropdownDirective]
})
export class AppComponent {
  title = 'shopping-list-app';
}
