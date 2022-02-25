import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private userUrl = 'api/users';

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

  //Return all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(_ => this.log('fetched user')),
      catchError(this.handleError('get Users', []))
    );
  }

  
  // Delete User
  deleteUser(user: User): Observable<User> {
    const url = `${this.userUrl}/${user.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`delete user id= ${user.id}`)),
      catchError((this.handleError<any>('Delete user')))
    );
  }

  // Add User
  addUser(user: User): Observable<User> {
    const url = `${this.userUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post<User>(url, user, httpOptions).pipe(
      tap(_ => this.log(`ajouter user id= ${user.id}`)),
      catchError((this.handleError<any>('ajouter user')))
    );
  }

  // Display User by Id
  displayUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.get<User>(url, httpOptions).pipe(
      tap(_ => this.log(`display user id= ${id}`)),
      catchError((this.handleError<any>('display user')))
    );
  }

  

  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json'})
    };

    return this.http.put(this.userUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updated user'))
    );
  }
}
