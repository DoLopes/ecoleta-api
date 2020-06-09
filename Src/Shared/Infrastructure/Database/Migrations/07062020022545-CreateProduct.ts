import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProducts07062020022545 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table products");
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table products (
        id uuid NOT NUll,
        image varchar(150) NOT NUll,
        title varchar(150) NOT NUll,
        created_at timestamp(5),
        last_updated_at timestamp(5),
        PRIMARY KEY (id)
      );
    `);
  }
}
