import { Component, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Spot } from '../spot.interface';

@Component({
  selector: 'app-spot-item',
  templateUrl: './spot-item.component.html',
  styleUrls: ['./spot-item.component.css']
})
export class SpotItemComponent {

  @Input() spot: Spot = {} as Spot;
  @Output() spotClicked: EventEmitter<Spot> = new EventEmitter<Spot>()

  ngOnChanges(changes: SimpleChanges) {
    const newSpot: Spot = changes['spot'].currentValue;
    if (newSpot.availableSpotNumber.value / newSpot.totalSpotNumber.value < 0.25) {
      console.log("Le parking " + newSpot.name.value + " est presque plein");
    }
  }

  onClick() {
    this.spotClicked.emit(this.spot);
  }

  constructor() {
  }
}
