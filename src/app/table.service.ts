import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class tableService {
  private apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) { }
  
  public getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }
};