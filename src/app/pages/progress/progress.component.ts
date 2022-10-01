import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {
  progreso1: number = 25;
  progreso2: number = 35;

  constructor() {
  }

  ngOnInit(): void {
  }

  getProceso1() {
    return `${this.progreso1}%`;
  }

  getProceso2() {
    return `${this.progreso2}%`;
  }

}
