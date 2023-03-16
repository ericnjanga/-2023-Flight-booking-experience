import { DepartureArrivalCity } from "./departure-arrival-city";
import { ExtraSearchCriteria } from "./extra-search-criteria";

export interface OriginDestinationFilter {
  arrival_information: DepartureArrivalCity;
  departure_information: DepartureArrivalCity;
  dates_search_criteria: string[]; // in a date format e.g. 2022-10-24
  extra_search_criteria: ExtraSearchCriteria;
  item_order: string;

}
