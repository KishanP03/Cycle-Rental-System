
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrlsign = 'http://localhost:8080/api/auth/signup'; // Update to your backend base URL
  private baseUrllogin = 'http://localhost:8080/api/auth/login'; // Update to your backend base URL

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrlsign}`, user);
  }
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrllogin}?email=${credentials.email}&password=${credentials.password}`, credentials);
}
}