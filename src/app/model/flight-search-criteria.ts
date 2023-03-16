import { OriginDestinationFilter } from "./origin-destination-filter";

export interface FlightSearchCriteria {
  origin_destination_list: OriginDestinationFilter[]
}
