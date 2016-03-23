import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

// @Component({
//   selector: 'keg-display',
//   inputs: ['keg'],
//   template: `
//     <h3>{{ keg.name }}</h3>
//   `
// })
//
// export class KegComponent {
//   public keg: Keg;
// }
//
// @Component({
//   selector: 'keg-list',
//   inputs: ['kegList'],
//   outputs: ['onKegSelect'],
//   directives: [KegComponent],
//   template: `
//     <keg-display *ngFor="#currentKeg of kegList"
//     (click)="kegClicked(currentKeg)"
//     [class.selected]="currentKeg === selectedKeg"
//     [keg]="currentKeg">
//     </keg-display>
//   `
// })
//
// export class KegListComponent {
//   public kegList: Keg[];
//   public onKegSelect: EventEmitter<Keg>;
//   public selectedKeg: Keg;
//   constructor() {
//     this.onKegSelect = new EventEmitter();
//   }
//   kegClicked(clickedKeg: Keg): void{
//     console.log('child', clickedKeg);
//     this.selectedKeg = clickedKeg;
//     this.onKegSelect.emit(clickedKeg);
//   }
// }
//
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Drop Top", 0),
      new Keg("Apocalypse IPA", 1),
      new Keg("Blonde Bombshell", 2),
      new Keg("Mirror Pond", 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}

// export class Keg {
//   public isEmpty: boolean = false;
//   constructor(public name: string, public id: number) {
//
//   }
// }
