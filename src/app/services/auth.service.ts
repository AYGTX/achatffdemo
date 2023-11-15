import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(loginModel: any): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post('https://localhost:7214/Forfait/Login', JSON.stringify(loginModel), { headers: header })
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('logged')) {
      return true;
    }
    return false;
  }
  public logout = () => {
    localStorage.removeItem('logged')
  }

}
