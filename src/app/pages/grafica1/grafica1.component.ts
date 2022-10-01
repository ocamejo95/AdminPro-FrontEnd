import {Component, OnInit} from '@angular/core';
import {ChartData} from "chart.js";


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {

  labels1: string[] = ['Jamon', 'Pan', 'Queso'];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {data: [350, 450, 100, 126]}
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
