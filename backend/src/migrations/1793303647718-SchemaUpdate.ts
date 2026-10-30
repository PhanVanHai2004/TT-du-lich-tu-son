import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1793303647718 implements MigrationInterface {
    name = 'SchemaUpdate1793303647718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "map" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "oder" integer NOT NULL, "icon" character varying NOT NULL, CONSTRAINT "PK_3b08de72489b3d4471b74516819" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "map"`);
    }

}
