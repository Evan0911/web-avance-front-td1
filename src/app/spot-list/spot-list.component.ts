import { Component } from '@angular/core';
import { SpotService } from '../spot-service.service';
import { Spot } from '../spot.interface';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.css'],
  providers: [SpotService]
})
export class SpotListComponent {

  spots: any[] = []

  constructor(private spotService: SpotService) { }

  ngOnInit(): void {
    this.spotService.getSpots().subscribe(data => {
      this.spots = data;
    });
  }

  trackByFn(index: Number, item: any) {
    return index;
  }

  like(spot: Spot) {
    console.log(spot.name.value + " a été liké");
  }
}
