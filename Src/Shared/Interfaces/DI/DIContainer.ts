import { Container } from "inversify";

export class DIContainer {
  public static create(): Container {
    return new Container();
  }
}
