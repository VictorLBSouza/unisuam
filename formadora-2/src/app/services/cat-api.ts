import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CatApiService {
  private readonly API_URL = 'https://api.thecatapi.com/v1/images/search';
  constructor(private http: HttpClient) { }
  
  public getRandomCatImage(): Observable<any> {
    return this.http.get<any[]>(this.API_URL);
  }
  
  public getMultipleCatImages(limit: number = 5): Observable<any> {
    return this.http.get<any[]>(`${this.API_URL}?limit=${limit}`);
  }
}