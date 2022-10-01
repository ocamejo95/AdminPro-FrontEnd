import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartEvent, ChartType} from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label3', 'Label3'];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {data: [350, 450, 100]}
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';


  constructor() {
  }

  ngOnInit(): void {
  }

  public chartClicked({event, active}: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
