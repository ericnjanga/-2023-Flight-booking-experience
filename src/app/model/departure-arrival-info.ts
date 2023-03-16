export interface DepartureArrivalInfo {
  airport_reference_id: string;
  date: string;
  date_of_week_name: string;
  remain_time_for_departure?: string;
  time: string;
  change_day_indicator: number;
}
