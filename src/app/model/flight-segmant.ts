import { FlightGroupInfo } from "./flight-group-info";

export interface FlightSegmant {
    name: string;
    value: any;
    flightgroups: FlightGroupInfo[];
}
