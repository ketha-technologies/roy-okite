import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsapiService {

  constructor(private http:HttpClient) { }

  collectionsUrl = "http://localhost:3000/collections"

  getAllCollections():Observable<Collection> {
    return this.http.get<Collection>(this.collectionsUrl);
  }
}
