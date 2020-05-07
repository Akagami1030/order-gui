import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators'
import { IItem } from './item';
import { ICreateItem } from './create-item/create-item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl = 'http://localhost:9000/items';
  httpOptions = { headers: new HttpHeaders({'Content-type': 'application/json', 'Authorization': 'hello'})};

  constructor(private http: HttpClient) { }

  updateItem(item: IItem): Observable<IItem> {
    const url = `${this.itemUrl}/${item.id}`;
    return this.http.put<IItem>(url, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  postItem(item: ICreateItem): Observable<ICreateItem> {
    return this.http.post<ICreateItem>(this.itemUrl, item);
  }

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.itemUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)),
      catchError(this.handleError)));
  }
  getItem(id: string): Observable<IItem | undefined> {
    return this.getItems()
      .pipe(
        map((items: IItem[]) => items.find(i => i.id === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}

