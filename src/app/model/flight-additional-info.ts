export interface FlightAdditionalInfo {
}

export interface Equipment {
  change_of_gauge: string;
  equipment_reference_id: string;
}

export interface SpecialServiceAvailability {
  code: string;
  remain_space: number;
}

/*
 "flight_additional_information": {
  "api_required": false,
  "connecting_times_detail": {},
  "dei8": "",
  "enable_prs": false,
  "equipment": {
    "change_of_gauge": true,
    "equipment_reference_id": "320_0"
  },
  "flight_remarks_list": [],
  "flight_stops_details": [],
  "in_flight_services": "",
  "meal_service": [],
  "special_service_availability_list": [
    {
      "code": "UMNR",
      "remain_space": 5
    }
  ]
}
*/
