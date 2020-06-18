import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAddresses17062020214110 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table addresses");
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table addresses (
        id uuid NOT NULL,
        point_id uuid NOT NULL,
        latitude bigint NOT NULL,
        longitude bigint NOT NULL,
        street varchar(150) NOT NULL,
        number varchar(30) NOT NULL,
        neighborhood varchar(150) NOT NULL,
        city varchar(150) NOT NULL,
        state varchar(150) NOT NULL,
        created_at timestamp(5),
        updated_at timestamp(5),
        PRIMARY KEY (id),
        CONSTRAINT addresses_fk1 FOREIGN KEY (point_id) REFERENCES points(id)
      );
    `);
  }
}
