
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({ providedIn: "root" })
export class AuthService {

  private montreUrl = 'http://localhost:3000/api/user';
  public token: string;
  private tokenTimer: any;
  // Assure l'envoie d'un paramètre aux autres components
  //Un Subject est à la fois un observable ET un observateur. 
  //On peut donc subscribe dessus, mais également lui envoyer des valeurs :
  private authStatusListener = new Subject<boolean>();
  private isUserAuthenticated = false;


  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  isUserAuth() {
    return this.isUserAuthenticated;
  }

  createUser(user) {
    let url = `${this.montreUrl}/signup`;
    this.http.post(url, user).subscribe(
      res => {
        console.log("Res after creating user", res);
      }
    )
  }

  login(user) {
    let url = `${this.montreUrl}/login`;
    this.http.post<{ token: string, expiresIn: number }>(url, user).subscribe(
      (res) => {   
        const token = res.token;
        this.token = token;
        if (token) {
          const expireInDuration = res.expiresIn;

          this.setAuthTimer(expireInDuration);
          this.isUserAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expireInDuration * 1000);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(['/']);
        }
      }
    )
  }

  autoAuthUser() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    const now = new Date();
    const expiresIn = new Date(expirationDate).getTime() - now.getTime();

    console.log("expiresIn", expiresIn);

    if (expiresIn) {
      this.token = token;
      this.isUserAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.clearAuthData();
    this.isUserAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);

  }

  private setAuthTimer(duration: number) {
    console.log('Set Timer', duration);

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token',  token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

}