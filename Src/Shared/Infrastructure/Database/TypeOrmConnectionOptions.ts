
import { Settings } from "Shared/Infrastructure/Settings/Settings";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const settings = new Settings();

const typeOrmConnectionOptions: PostgresConnectionOptions = {
  cli: {
    migrationsDir: "Src/Shared/Infrastructure/Database/Migrations",
  },
  database: settings.dbName,
  entities: [],
  host: settings.dbHost,
  logging: settings.dbLogging,
  migrations: ["Src/Shared/Infrastructure/Database/Migrations/*.ts"],
  password: settings.dbPassword,
  port: settings.dbPort,
  type: "postgres",
  username: settings.dbUser,
};

export = typeOrmConnectionOptions;
