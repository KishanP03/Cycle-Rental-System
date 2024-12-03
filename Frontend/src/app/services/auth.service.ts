import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Check if user is logged in by checking localStorage or sessionStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  // Get the logged-in user's data (e.g., name, email)
  getUserData(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Store user data after login
  setUserData(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Remove user data during logout
  logout(): void {
    localStorage.removeItem('user');
  }
}
