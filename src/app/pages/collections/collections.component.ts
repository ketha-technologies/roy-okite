import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Collection } from 'src/app/models/collection';
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
  dataSource: any;

  @ViewChild(MatPaginator) paginator !:MatPaginator
  @ViewChild(MatSort) sort !:MatSort

  getAllCollections() {
    this.service.getAllCollections().subscribe(response => {
      this.collectionsData = response;
      this.dataSource = new MatTableDataSource<Collection>(this.collectionsData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function (record: any, filter: any) {
        const regex = new RegExp(/(\w)\w*\1\w*\1\w*/)
        if(regex.test(record.collectionCode)) {
          return record.collectionCode.indexOf(filter)!=-1;
        }
        return alert('Invalid Collection Code!');
     }
    });
  }

  timeout: any = null;

  applySearch(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      const searchValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = searchValue.trim().toUpperCase();
    }, 1500);
  }
}
