import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private contactUrl = 'api/contacts';

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

  //Return all contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl).pipe(
      tap(_ => this.log('fetched contacts')),
      catchError(this.handleError('get contacts', []))
    );
  }


  // // Add Montre
  addContact(contact: Contact): Observable<Contact> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post<Contact>(this.contactUrl, contact, httpOptions).pipe(
      tap(_ => this.log(`ajouter contact id= ${contact.id}`)),
      catchError((this.handleError<any>('ajouter contact')))
    );
  }
}
