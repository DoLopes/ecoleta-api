import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePoints07062020022410 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table points");
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table points (
        id uuid NOT NULL,
        image varchar(150) NOT NULL,
        name varchar(150) NOT NULL,
        email varchar(150) NOT NULL,
        phone_mobile varchar(30) NOT NULL,
        latitude bigint NOT NULL,
        longitude bigint NOT NULL,
        city varchar(150) NOT NULL,
        uf varchar(150) NOT NULL,
        created_at timestamp(5),
        updated_at timestamp(5),
        PRIMARY KEY (id)
      );
    `);
  }
}
