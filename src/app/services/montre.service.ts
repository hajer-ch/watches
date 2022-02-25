import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Montre } from '../models/montre';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MontreService {

  montres: Montre[];
  message:string;
  private updatedMontres = new Subject<Montre[]>();

  constructor(private http: HttpClient) { }
  private montreUrl = 'http://localhost:3000/';

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

  //Return all montres
  // API/MONTRES
  // getMontres()  {
  //   let url = 'http://localhost:3000/api/montres';
  //   console.log("URL", url);
    
  //   return this.http.get<{ message:string, montres: Montre[]}>(url).subscribe(
  //     (data) => {
  //       console.log("Here my data",data);
        
  //     this.montres = data.montres;
  //     this.message = data.message;
  //     // this.updatedMontres.next([...this.montres]);

      
  //     }
  //   );
  // }

  getMontres(): Observable<Montre[]> {
    let url = `${this.montreUrl}api/montres`;
    return this.http.get<{montres: any, message:string}>(url).pipe(
      map(data => {
        console.log("new data",data.montres);
        
        return data.montres.map(montre => {          
          return {
            id: montre._id,
            price: montre.price,
            marque: montre.marque,
            image: montre.image,
            description: montre.description,
          };
        });
      }),
      tap(_ => this.log(`get montres`)),
      catchError((this.handleError<any>('get montre')))
    );    
    
  }
  
  // Delete Montre
  // API/MONTES/ID
  // API/MONTRES
  // {id: GGHGHG, marque: "", price: "", description: ""}
  deleteMontre(montre: Montre): Observable<Montre> {
    // localhost:3000/api/montres/5
    let url = `${this.montreUrl}api/montres/${montre.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<Montre>(url, httpOptions).pipe(
      tap(_ => this.log(`Delete montre id= ${montre.id}`)),
      catchError((this.handleError<any>('Delete montre')))
    );
  }

  // // Add Montre
  addMontre(montre: Montre, image: File): Observable<Montre> {
    let url = `${this.montreUrl}api/montres`;
    let formData = new FormData();
    formData.append('price', String(montre.price));
    formData.append('marque', montre.marque);
    formData.append('description', montre.description);
    formData.append('image', image, montre.marque);

    return this.http.post<Montre>(url, formData).pipe(
      tap(_ => this.log(`ajouter montre id= ${montre.id}`)),
      catchError((this.handleError<any>('ajouter montre')))
    );
  }

  // API/MONTRES/6
  // // Display Montre by Id
  displayMontre(id: number): Observable<Montre> {
    let url = `${this.montreUrl}api/montres/${id}`;
    console.log("Angular service url", url);
    
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.get<Montre>(url, httpOptions).pipe(
      tap(_ => this.log(`display montre id= ${id}`)),
      catchError((this.handleError<any>('display montre')))
    );
  }

  displayMontreForUpdate(id: string): Observable<Montre> {
    let url = `${this.montreUrl}api/montres/${id}`;
    return this.http.get<Montre>(url).pipe(
      tap(_ => this.log(`display montre id= ${id}`)),
      catchError((this.handleError<any>('display montre')))
    );
  }

  // API/MONTRES
  updateMontre(montre: Montre, image: File | string): Observable<Montre> {
    let url = `${this.montreUrl}api/montres/${montre.id}`;
    let formData;
    if (typeof(image) === 'object'){
      let formData = new FormData();

      formData.append('price', String(montre.price));
      formData.append('marque', montre.marque);
      formData.append('description', montre.description);
      formData.append('image', image, montre.marque);
    } else {
      formData = montre;
    }

    return this.http.put(url, formData).pipe(
      tap(_ => this.log(`updated montre id=${montre.id}`)),
      catchError(this.handleError<any>('updated montre'))
    );
  }

  
  searchMontre(term: string): Observable <Montre[]> {
    if (!term.trim()){
     return of([]);
   }
  
   return this.http.get<Montre[]>(`${this.montreUrl}/?marque=${term}`).pipe(
   tap(_ => this.log(`found montres matching "${term}"`)),
   catchError(this.handleError<Montre []>('search montres', []))
   );
  }
}


