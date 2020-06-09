import { Connection } from "typeorm";

export interface IDatabaseConnection {
  closeConnection(): Promise<void>;

  getConnection(): Promise<Connection>;
}
