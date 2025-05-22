import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/posts';
  private apiUsersUrl = 'http://localhost:3000/users';

  constructor(private http : HttpClient) { }

  public getData(): Observable<{[key: string]: any}> {
    return this.http.get(`${this.apiUrl}`);
  }

  public getUsreData(): Observable<{[key: string]: any}> {
    return this.http.get(`${this.apiUsersUrl}`);
  }

  public updateData(id: number, likes: { [key: string]: string | number}): Observable<{[key: string]: string |any}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, likes);
  }
}