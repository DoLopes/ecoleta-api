import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "products" })
export class ProductModel {
  @PrimaryColumn({ type: "uuid" })
  public id!: string;

  @Column("text")
  public title!: string;

  @Column("text")
  public image!: string;

  @Column("timestamp")
  public createdAt!: Date;

  @Column("timestamp")
  public updatedAt!: Date;
}
