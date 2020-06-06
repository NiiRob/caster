import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post<LoginResponse>(`${environment.apiEndpoint}/auth/login`, credentials).toPromise();
  }

  // logout() {
  //   localStorage.clear();
  // }

  // getAndSaveLoginResponse(response: LoginResponse) {
  //   if (response) { localStorage.setItem('token', response.token); }
  // }
}

export interface LoginResponse {
  username: string;
  token: string;
}
