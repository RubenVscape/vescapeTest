import { randomUUID } from "crypto";
import { LocationModel,ILocation } from "../models/location.model";


export class LocationService {
    async createLocation(data: ILocation){
        const newLocation = new LocationModel({
            ...data,
            locationId: randomUUID()
        })
        return await newLocation.save();
    }
    
    async getLocations(){
        const locations =  await LocationModel.find().select("-_id").lean()
        return (locations);
    }
}