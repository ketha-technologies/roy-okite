import { Component, OnInit } from '@angular/core';
import { CollectionsapiService } from 'src/app/services/collectionsapi.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})

export class CollectionsComponent implements OnInit {

  constructor(private service:CollectionsapiService) {}

  ngOnInit(): void {
      this.getAllCollections();
  }

  displayedColumns = ['position', 'collectionCode', 'farmer', 'collectionSize', 'collectionDate'];

  collectionsData: any;

  getAllCollections() {
    this.service.getAllCollections().subscribe(response => {
      this.collectionsData = response;
    });
  }


}
