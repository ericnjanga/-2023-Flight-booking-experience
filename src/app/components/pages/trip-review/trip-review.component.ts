import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AdditionalFlightInfoComponent } from '../additional-flight-info/additional-flight-info.component';

@Component({
  selector: 'app-trip-review',
  templateUrl: './trip-review.component.html',
  styleUrls: ['./trip-review.component.scss']
})
export class TripReviewComponent {

  constructor(private matBottomSheet: MatBottomSheet) {}

  showAdditionalTripInfo(showAdditionalTripInfo: string) {
    this.matBottomSheet.open(AdditionalFlightInfoComponent, {
      data: { showFlightInfo: showAdditionalTripInfo }
    });
  }
}
