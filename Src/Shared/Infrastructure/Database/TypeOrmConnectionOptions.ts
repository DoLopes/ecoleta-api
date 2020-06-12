
import { Settings } from "Shared/Infrastructure/Settings/Settings";
import { ConnectionOptions } from "typeorm-seeding";
import { ProductModel } from "Points/Infrastructure/Models/ProductModel";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const settings = new Settings();

const typeOrmConnectionOptions: ConnectionOptions = {
  cli: {
    migrationsDir: "Src/Shared/Infrastructure/Database/Migrations",
  },
  database: settings.dbName,
  entities: [ProductModel],
  factories: [],
  host: settings.dbHost,
  migrations: ["Src/Shared/Infrastructure/Database/Migrations/*.ts"],
  namingStrategy: new SnakeNamingStrategy(),
  logging: settings.dbLogging,
  password: settings.dbPassword,
  port: settings.dbPort,
  seeds: ["Src/Shared/Infrastructure/Database/Seeds/*.seed.ts"],
  type: "postgres",
  username: settings.dbUser,
};

export = typeOrmConnectionOptions;
