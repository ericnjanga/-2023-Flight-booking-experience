import { Component, Inject, INJECTOR } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-additional-flight-info',
  templateUrl: './additional-flight-info.component.html',
  styleUrls: ['./additional-flight-info.component.scss'],
})
export class AdditionalFlightInfoComponent {
  showFlightDetails: 'trip' | 'services' | 'passengers' = 'trip';

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public bottomSheet: MatBottomSheetRef<AdditionalFlightInfoComponent>
  ) {
    this.showFlightDetails = data.showFlightInfo;
  }

  close() {
    this.bottomSheet.dismiss();
  }
}
