import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="add-keg-form">
      <h3>Add Keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <input type="number" placeholder="PintsLeft" class="col-sm-8 input-lg" #newPintsLeft>
      <button (click)="addKeg(newName, newBrand, newPrice, newPintsLeft)" class="col-sm-4 btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userPintsLeft: HTMLInputElement) {
    var newKeg: Keg = new Keg(userName.value, userBrand.value, userPrice.value, userPintsLeft.valueAsNumber, 0);
    this.onSubmitNewKeg.emit(newKeg);
  }

}
