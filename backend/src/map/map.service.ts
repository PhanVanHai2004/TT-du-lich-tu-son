import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Map } from "./map.entity.js";
import { Repository } from "typeorm";


@Injectable()
export class MapService {
    constructor(
        @InjectRepository(Map)
        private readonly Maprepsitory: Repository<Map>,
    ) {}

    findAll(){
        return this.Maprepsitory.find({
            order: {
                oder:"ASC"
            }
        });
    }

}