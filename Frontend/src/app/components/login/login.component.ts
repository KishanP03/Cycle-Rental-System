import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterEvent, RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  loginMessage = '';

  constructor(private userService: UserService,private router: Router,private authService: AuthService) {}

  login() {
    this.userService.login(this.credentials).subscribe(
      data => {
        if (data==null) {
          this.loginMessage = 'Invalid email or password. Please try again.';

        }
        else{
        console.log(data);
        this.loginMessage = 'Login successful';
        this.authService.setUserData(data);
        this.router.navigate(['']);
        }
      },
    );
  }
}
