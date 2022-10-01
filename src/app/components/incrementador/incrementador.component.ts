import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';


  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso);
  }

  onChange(valorNuevo: number) {
    if (valorNuevo >= 100) {
      this.progreso = 100;
    } else if (valorNuevo <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valorNuevo;
    }
    this.valorSalida.emit(this.progreso);
  }
}
