import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionsapiService {

  constructor(private http:HttpClient) { }

  getAllCollections() {
    return this.http.get("http://localhost:3000/collections");
  }
}
