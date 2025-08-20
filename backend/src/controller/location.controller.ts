import { JsonController, Post, Get, HttpCode, Body, Authorized, CurrentUser } from "routing-controllers";
import { LocationService } from "../services/locations.service";
import { ILocation } from "../models/location.model";
import { JwtPayload } from "../auth/authorizationChecker";

const locationService = new LocationService();


@JsonController("/locations")
export default class LocationController{
    @HttpCode(201)
    @Authorized(["global"])
    @Post("/createLocation")
    async createLocation(@Body() body: ILocation, @CurrentUser() user: JwtPayload){

        const newLocation = {
            ...body,
            createdBy: user.sub
        } as ILocation;
        const  location = await locationService.createLocation(newLocation);
        return { message:'location created', data: [location.locationId]}
    }

    @HttpCode(200)
    @Get("/getLocations")
    async getLocations(){
        const locations = await locationService.getLocations();
        console.log(locations);
        return { status:'ok', data: locations, total: locations.length}
    }
}