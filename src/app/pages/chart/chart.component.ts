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
      if(this.chartData!=null) {
        for(let i = 0; i < this.chartData.length; i++) {
          console.log(this.chartData[i]);
          this.dateData.push(this.chartData[i].collectionDate.slice(0, 10));
          this.sizeData.push(this.chartData[i].collectionSize);
        }
        this.createChart(this.dateData, this.sizeData);
      }
    });
  }
 
  createChart(dateData: any, sizeData: any){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes the type of chart

      data: {// values on X-Axis
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
