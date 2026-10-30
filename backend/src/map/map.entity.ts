import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('map')
export class Map {
    @PrimaryGeneratedColumn()
    id! :number;

    @Column({ type: 'varchar' })
    name! :string;

    @Column({ type: 'integer'})
    oder! :number;

    @Column({ type: 'varchar'})
    icon! :string;
}