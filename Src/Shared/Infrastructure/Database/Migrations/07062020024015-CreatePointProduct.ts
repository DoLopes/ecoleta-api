import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePointProduct07062020024015 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table point_product");
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table point_product (
        id uuid NOT NULL,
        point_id uuid NOT NULL,
        product_id uuid NOT NULL,
        created_at timestamp(5),
        updated_at timestamp(5),
        PRIMARY KEY (id),
        CONSTRAINT point_product_fk1 FOREIGN KEY (point_id) REFERENCES points(id),
        CONSTRAINT point_product_fk2 FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `);
  }
}
