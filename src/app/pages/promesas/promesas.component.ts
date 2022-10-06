import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    fetch('https://reqres.in/api/users')
      .then(response => {
        response.json().then(body => console.log(body))
      })
  }
}
