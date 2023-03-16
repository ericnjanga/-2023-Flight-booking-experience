import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AdditionalFlightInfoComponent } from '../additional-flight-info/additional-flight-info.component';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent {
  constructor(private matBottomSheet: MatBottomSheet) {}

  showAdditionalTripInfo(showAdditionalTripInfo: boolean) {
    this.matBottomSheet.open(AdditionalFlightInfoComponent, {
      data: { showFlightInfo: showAdditionalTripInfo }
    });
  }
}
