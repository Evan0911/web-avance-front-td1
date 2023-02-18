import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotService } from '../spot-service.service';
import { Spot } from '../spot.interface';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.css']
})
export class SpotDetailComponent {

  spot: Spot = {} as Spot;
  isSharePressed: boolean = false;

  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  messageControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router, private route: ActivatedRoute, private spotService: SpotService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.spotService.getSpotDetail(this.route.snapshot.params['id']).subscribe((data: Spot[]) => {
      this.spot = data[0];
    });
  }

  goBack() {
    this.router.navigate(['/spot-list']);
  }

  share() {
    this.isSharePressed = !this.isSharePressed;
  }

  sendMessage() {
    if (this.emailControl.valid && this.messageControl.valid) {
      console.log({
        email: this.emailControl.value,
        message: this.messageControl.value,
        spotName: this.spot.name.value,
        spotStatus: this.spot.status.value,
        availableSpotNumber: this.spot.availableSpotNumber.value,
        spotAllowedVehicle: this.spot.allowedVehicleType.value,
        spotCoordinates: this.spot.location.value.coordinates,
        spotLastUpdated: this.spot.status.metadata.timestamp.value,
      });
    }
    else {
      console.error('Invalid email or message');
    }
  }

}
