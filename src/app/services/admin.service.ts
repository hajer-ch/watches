import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private adminUrl = 'api/users';

  // Log function for Console
  private log(log: string) {
    console.info(log);
  }

  // Handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  //Return all admins
  getAdmins(): Observable<User[]> {
    return this.http.get<User[]>(this.adminUrl).pipe(
      tap(_ => this.log('fetched admins')),
      catchError(this.handleError('get admins', []))
    );
  }
}
