export interface Location {
    name: string,
    limit: {
        min: number,
        max: number
    }
}

// let locations: Array<Location> = []
// locations.push({name: 'Park', limit: { min: 2, max: 5}})
// locations.push({name: 'Woods', limit: { min: 2, max: 4}})
// locations.push({name: 'Forest', limit: { min: 2, max: 6}})
//
// export { locations }
