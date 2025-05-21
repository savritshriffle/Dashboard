import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http : HttpClient) { }

  public getData(): Observable<{[key: string]: any}> {
    return this.http.get(`${this.apiUrl}`);
  }

  public updateData(id: number, data: number): Observable<{[key: string]: any}> {
    const url = `${this.apiUrl}/${id}`;
    console.log(id, data, url)
    return this.http.patch(url, data);
  }
}