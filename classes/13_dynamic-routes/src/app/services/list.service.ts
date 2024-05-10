import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  private apiURL = 'http://localhost:3000/animals';

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiURL}/${id}`);
  }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => a.name !== animal.name);
  }
}
