import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});
@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  constructor(private http: HttpClient) {}
  get(api: string): Observable<any> {
    return this.http.get(api).pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }

  post(api: string, data: any): Observable<any> {
    return this.http.post(api, data).pipe(
      tap((res) => {
        console.log(res);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }
  delete(api: string): Observable<any> {
    return this.http.delete(api, { headers, responseType: 'text' }).pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }
  put(api: string, data: any): Observable<any> {
    return this.http.put(api, data, { headers, responseType: 'text' }).pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }
  postDatVe(api: string, data?: any): Observable<any> {
    return this.http.post(api, data, { headers, responseType: 'text' }).pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }
  handleErr(err: any): any {
    switch (err.status) {
      case 500:
        alert(err.error);
        break;
      case 404:
        alert(err.statusText);
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
