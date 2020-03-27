import { ISettings } from "Src/Infrastructure/Settings/ISettings";
import { MaybeUndefined } from "tsdef";

export class Settings implements ISettings {
  public getDbDebug(): boolean {
    return this.isPropertyTrue("DATABASE_DEBUG");
  }

  public getDbHost(): string {
    return this.assertAndReturnSetting("DATABASE_HOST");
  }

  public getDbName(): string {
    return this.assertAndReturnSetting("DATABASE_NAME");
  }

  public getDbPassword(): string {
    return this.assertAndReturnSetting("DATABASE_PASSWORD");
  }

  public getDbPort(): number {
    return this.assertAndReturnNumberSetting("DATABASE_PORT");
  }

  public getDbUser(): string {
    return this.assertAndReturnSetting("DATABASE_USER");
  }

  private assertAndReturnNumberSetting(settingName: string): number {
    const setting = this.returnSetting(settingName);

    if (setting === undefined) {
      throw new Error(`You need to configure the environment variable ${settingName}`);
    }

    return Number(setting);
  }

  private assertAndReturnSetting(settingName: string): string {
    const setting = this.returnSetting(settingName);

    if (setting === undefined) {
      throw new Error(`You need to configure the environment variable ${settingName}`);
    }

    return setting;
  }

  private isPropertyTrue(property: string): boolean {
    return this.assertAndReturnSetting(property) === "true";
  }

  private returnSetting(settingName: string): MaybeUndefined<string> {
    return process.env[settingName];
  }
}
