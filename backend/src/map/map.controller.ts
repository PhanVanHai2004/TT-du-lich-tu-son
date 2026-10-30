import { Controller, Get } from "@nestjs/common";
import { MapService } from "./map.service.js";


@Controller('map')
export class MapController {
    constructor ( private readonly mapService: MapService ) {}
    @Get()
    async finAll(){
        return this.mapService.findAll();
    }
}
