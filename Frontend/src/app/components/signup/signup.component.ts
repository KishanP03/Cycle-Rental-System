import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent {
  user = { name: '', email: '', password: '', contact_no: '' };

  constructor(private userService: UserService, private authService: AuthService ,private router:Router) {}

  onSignup() {
    this.userService.signup(this.user).subscribe(
      data => {
        alert('User registered successfully');

        this.router.navigate(['login']);

      });
  }
}
