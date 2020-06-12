import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 as uuid } from "uuid";
import { ProductModel } from "Points/Infrastructure/Models/ProductModel";

const baseProduct = { createdAt: new Date(), updatedAt: new Date() };

const products= [
  { ...baseProduct, id: uuid(), title: "Lâmpadas", image: "lampadas.svg" },
  { ...baseProduct, id: uuid(), title: "Pilhas e Baterias", image: "baterias.svg" },
  { ...baseProduct, id: uuid(), title: "Papéis e Papelão", image: "papeis.svg" },
  { ...baseProduct, id: uuid(), title: "Resíduos Eletrónicos", image: "eletronicos.svg" },
  { ...baseProduct, id: uuid(), title: "Resíduos Orgânicos", image: "organicos.svg" },
  { ...baseProduct, id: uuid(), title: "Óleo de Cozinha", image: "oleo.svg" },
];

export class CreateProducts implements Seeder {
  public async run(_factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductModel)
      .values(products)
      .execute();
  }
}
