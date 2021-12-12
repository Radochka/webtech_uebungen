import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  /*template: `
  <h2>Single car</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Alias aut delectus dignissimos doloremque doloribus dolorum
    incidunt ipsam nemo perspiciatis quas sed similique suscipit tempora,
    ullam unde vel voluptatem voluptates voluptatibus.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, cupiditate.</p>
  `,*/
  styleUrls: ['./car.component.css']
  /*styles: [`
  h2 { color: aqua}`]*/
})
export class CarComponent {

  carName = 'Ford'
  carYear = 2015

  getName() {
    return this.carName
  }
}
