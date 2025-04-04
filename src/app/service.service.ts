import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }
  
  getChartApi(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
  
}
