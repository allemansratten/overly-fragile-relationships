import { LocationName } from "../content/locations";

export interface Location {
    name: LocationName,
    limit: {
        min: number,
        max: number
    }
}