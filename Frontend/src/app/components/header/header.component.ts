import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, SearchBarComponent],
  template: `
    <header class="header">
      <div class="brand" routerLink="/">Cycle Rental</div>
      <app-search-bar></app-search-bar>
      <div class="nav-links">
        <button routerLink="/login">Login</button>
        <button routerLink="/signup">Sign Up</button>
        <button routerLink="/cart">Cart</button>
      </div>
    </header>
  `,
  styles: [
    `
      .header { display: flex; justify-content: space-between; padding: 1em; background: #232f3e; color: white; }
      .brand { font-size: 1.5em; cursor: pointer; }
      .nav-links button { background: #ffa41b; border: none; padding: 100px; margin-left: 1em; cursor: pointer; }
    `
  ]
})
export class HeaderComponent {}
