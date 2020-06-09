import { Connection, createConnection } from "typeorm";
import { IDatabaseConnection } from "Shared/Infrastructure/Database/IDatabaseConnection";
import typeOrmConnectionOptions from "Shared/Infrastructure/Database/TypeOrmConnectionOptions";

export class DatabaseConnection implements IDatabaseConnection {
  private connection?: Connection;

  public async closeConnection(): Promise<void> {
    await this.connection?.close();
  }

  public async getConnection(): Promise<Connection> {
    if (this.connection === undefined) {
      this.connection = await this.createConnection();

      return this.connection;
    }

    return this.connection;
  }

  private async createConnection(): Promise<Connection> {
    return createConnection(typeOrmConnectionOptions);
  }
}
