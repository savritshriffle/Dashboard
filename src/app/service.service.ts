import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  private productApi = `https://dummyjson.com/products`;
  private apiData = `formData/posts`;
  constructor(private http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }
  
  getChartApi(): Observable<any>{
    return this.http.get(`${this.productApi}`)
  }
  customApi(inputField: any): Observable<any>{
    return  this.http.post(this.apiData, inputField)
    // console.log('service',inputField)
  }
  
}
