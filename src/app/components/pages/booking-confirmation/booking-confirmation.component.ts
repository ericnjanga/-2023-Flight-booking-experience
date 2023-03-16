import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AdditionalFlightInfoComponent } from '../additional-flight-info/additional-flight-info.component';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss']
})
export class BookingConfirmationComponent {
  constructor(private matBottomSheet: MatBottomSheet) {}

  showAdditionalTripInfo(showAdditionalTripInfo: string) {
    this.matBottomSheet.open(AdditionalFlightInfoComponent, {
      data: { showFlightInfo: showAdditionalTripInfo }
    });
  }
}
