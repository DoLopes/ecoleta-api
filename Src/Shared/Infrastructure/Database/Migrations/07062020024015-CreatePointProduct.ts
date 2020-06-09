import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePointProduct07062020024015 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table point_product");
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table point_product (
        id binary(36) NOT NULL,
        point_id binary(36) NOT NULL,
        product_id binary(36) NOT NULL,
        created_at datetime(6),
        last_updated_at datetime(6),
        PRIMARY KEY (person_id),
        CONSTRAINT point_product_fk1 FOREIGN KEY (point_id) REFERENCES points(id),
        CONSTRAINT point_product_fk2 FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `);
  }
}
