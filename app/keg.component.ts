import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <input *ngIf="keg.isEmpty" type="checkbox" checked (click)="toggleEmpty(true)"/>
      <input *ngIf="!keg.isEmpty" type="checkbox" (click)="toggleEmpty(false)"/>
      <label>{{ keg.name }}</label>
    </div>
      <h3>{{ keg.name }}</h3>
      <h5>Brewery: {{ keg.brand }}</h5>
      <p>Pints Left: {{ keg.pintsLeft }}</p>
      <p>Price Per Pint: \$\{{ keg.price }}</p>
  `
})

export class KegComponent {
  public keg: Keg;
  toggleEmpty(setState: boolean) {
    this.keg.isEmpty = setState;
  }
}
