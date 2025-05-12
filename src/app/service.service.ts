import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  private productApi = `https://dummyjson.com/products`;

  constructor(private http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }
  
  getChartApi(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.productApi}`)
  }
  
}
