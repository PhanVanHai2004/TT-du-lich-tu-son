import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Map } from "./map.entity.js";
import { MapController } from "./map.controller.js";
import { MapService } from "./map.service.js";



@Module({
    imports: [TypeOrmModule.forFeature([Map])],
    controllers: [MapController],
    providers: [MapService],
})
export class MapModule {}