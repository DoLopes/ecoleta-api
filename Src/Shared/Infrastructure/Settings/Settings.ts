import { Nullable } from "Shared/Lib/Nullable/Nullable";
import { ISettings } from "Shared/Infrastructure/Settings/ISettings";
import { LoggerOptions } from "typeorm/logger/LoggerOptions";

export class Settings implements ISettings {
  public get dbDebug(): boolean {
    return this.isPropertyTrue("DATABASE_DEBUG");
  }

  public get dbHost(): string {
    return this.assertAndReturnSetting("DATABASE_HOST");
  }

  public get dbName(): string {
    return this.assertAndReturnSetting("DATABASE_NAME");
  }

  public get dbPassword(): string {
    return this.assertAndReturnSetting("DATABASE_PASSWORD");
  }

  public get dbPort(): number {
    return this.assertAndReturnNumberSetting("DATABASE_PORT");
  }

  public get dbUser(): string {
    return this.assertAndReturnSetting("DATABASE_USER");
  }

  public get dbLogging(): LoggerOptions {
    return this.assertAndReturnSetting("DATABASE_LOGGING") as LoggerOptions;
  }

  private assertAndReturnNumberSetting(settingName: string): number {
    const setting = this.assertAndReturnSetting(settingName);

    return Number(setting);
  }

  private assertAndReturnSetting(settingName: string): string {
    return Nullable.getValueOrThrow(
      process.env[settingName], `You need to configure the environment variable ${settingName}`
    );
  }

  private isPropertyTrue(property: string): boolean {
    return this.assertAndReturnSetting(property) === "true";
  }
}
