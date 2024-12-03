import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: `<input type="text" placeholder="Search for cycles..." class="search-bar">`,
  styles: [`.search-bar { width: 400px; padding: 0.5em; border-radius: 5px; }`]
})
export class SearchBarComponent {}
