import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,
    imports: [RouterModule, DropdownDirective]
})

export class HeaderComponent {}