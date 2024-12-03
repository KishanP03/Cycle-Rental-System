import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    
    <h1>Welcome to the Home Page</h1>
    <p *ngIf="authService.isLoggedIn(); else loginMessage">
      Hello, {{ authService.getUserData()?.name }}!
    </p>
    <ng-template #loginMessage>
      <p>Please log in to see personalized content.</p>
    </ng-template>
  `,
})
export class HomeComponent {
  constructor(public authService: AuthService) {}
}
