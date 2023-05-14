import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CollectionsapiService } from 'src/app/services/collectionsapi.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public chart: any;

  constructor(private service:CollectionsapiService) {}

  chartData: any;
  dateData: any[]=[];
  sizeData: any[]=[];

  ngOnInit(): void {
    this.service.getAllCollections().subscribe(response => {
      this.chartData = response;
      this.chartData.sort((a: any, b: any) => new Date(a.collectionDate).valueOf() - new Date(b.collectionDate).valueOf());

      let aggregateData = Object.values(this.chartData.reduce((a: any, { collectionSize, collectionDate }: any) => {
        collectionSize = Number(collectionSize);
        collectionDate = collectionDate.slice(0, 10);

      if(!a[collectionDate])
        a[collectionDate] = Object.assign({},{collectionSize, collectionDate});
        else
        a[collectionDate].collectionSize += collectionSize;
      return a;
      },{}));

      this.chartData = aggregateData;

      if(this.chartData!=null) {
        for(let i = 0; i < this.chartData.length; i++) {
          this.dateData.push(this.chartData[i].collectionDate.slice(0, 10));
          this.sizeData.push(this.chartData[i].collectionSize);
        }
        this.createChart(this.dateData, this.sizeData, 'bar', 'barchart');
        this.createChart(this.dateData, this.sizeData, 'line', 'linechart');
      }
    });
  }
 
  createChart(dateData: any, sizeData: any, type: any, id: any){
  
    this.chart = new Chart(id, {
      type: type,

      data: {
        labels: dateData, 
	       datasets: [
          {
            label: "Collections Size",
            data: sizeData,
            backgroundColor: '#1e255b',
            borderColor: '#9098cc',
            borderWidth: 2
      
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }      
    });
  }  
}
