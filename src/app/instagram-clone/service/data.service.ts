import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  public getData(): Observable<{[key: string]: any}> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  public getUsreData(): Observable<{[key: string]: any}> {
    return this.http.get(`${this.apiUrl}/users`);
  }
  
  public updateData(id: number, comments: { [key: string]: string | number}): Observable<{[key: string]: string |any}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, comments);
  }
}