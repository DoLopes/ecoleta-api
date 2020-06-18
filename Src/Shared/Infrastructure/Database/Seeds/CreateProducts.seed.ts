import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { ProductModel } from "Points/Infrastructure/Models/ProductModel";

const baseProduct = { createdAt: new Date(), updatedAt: new Date() };

const products= [
  {
    ...baseProduct,
    id: "19e69a86-ddf1-4384-b832-d80ab86229d5",
    title: "Lâmpadas",
    image: "lampadas.svg",
  },
  {
    ...baseProduct,
    id: "d0430e0f-c0f7-4911-84b1-7b9c0eb86e23",
    title: "Pilhas e Baterias",
    image: "baterias.svg",
  },
  {
    ...baseProduct,
    id: "6e388679-26d0-4665-8429-e86b8bd7ee2b",
    title: "Papéis e Papelão",
    image: "papeis.svg",
  },
  {
    ...baseProduct,
    id: "5a341630-8712-4b1f-8ebc-66acc48ffc58",
    title: "Resíduos Eletrónicos",
    image: "eletronicos.svg",
  },
  {
    ...baseProduct,
    id: "d6420e16-4f8f-414d-90f8-7bb5e080142d",
    title: "Resíduos Orgânicos",
    image: "organicos.svg",
  },
  {
    ...baseProduct,
    id: "3f8b1306-9a0d-44a5-81f6-18ab53d19f9c",
    title: "Óleo de Cozinha",
    image: "oleo.svg",
  },
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
