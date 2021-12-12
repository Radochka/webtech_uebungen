import { Component } from '@angular/core';

@Component({
  selector: 'app-cars', //sind Zeilen in der html in app
  //selector: '[app-cars]', //[] sind für die div in der html
  //selector: '.app-cars', //. dh, dass wir als class benutzen
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = ''

  constructor() {}

  addCar() {
    this.addCarStatus = 'Das Auto hinzugefügt'
  }

}
