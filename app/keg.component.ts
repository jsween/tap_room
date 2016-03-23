import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}</h3>
    <h5>Brewery: {{ keg.brand }}</h5>
    <p>Pints Left: {{ keg.pintsLeft }}</p>
    <p>Price Per Pint: \$\{{ keg.price }}</p>
  `
})

export class KegComponent {
  public keg: Keg;
}
