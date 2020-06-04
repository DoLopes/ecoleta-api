import { Container } from "inversify";

export class DIContainer {
  public static create(): Container {
    const container = new Container();

    return container;
  }
}
