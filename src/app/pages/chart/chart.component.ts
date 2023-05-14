import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2021-06-31', '2023-01-31', '2023-03-01','2023-03-05',
								 '2023-03-31', '2023-04-29', '2023-04-31' ], 
	       datasets: [
          {
            label: "Collections Size",
            data: ['279','92', '34', '16', '175', '73', '100'],
            backgroundColor: '#1e255b'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }  
}
