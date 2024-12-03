import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';  
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HeaderComponent,FooterComponent,SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService,private router:Router) {}

  onLogout() {
    this.authService.logout();
    window.location.reload(); 
  }

  login(){
    this.router.navigate(['login']);    
  }
}
