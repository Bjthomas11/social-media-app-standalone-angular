import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() {
    let resourceURL = 'http://localhost:3000';
    return this.http.get(`${resourceURL}/categories`);
  }
}
