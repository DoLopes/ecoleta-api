import { Container } from "inversify";
import * as Types from "Shared/Interfaces/DI/Types";
import { HttpServer } from "Shared/Interfaces/Web/HttpServer";
import { Mediator } from "Shared/Interfaces/Web/Contracts/Mediator";
import { IMediator } from "Shared/Interfaces/Web/Contracts/IMediator";
import { PointsContainer } from "Points/Interfaces/DI/PointsContainer";

export class DIContainer {
  public static create(): Container {
    const container = new Container();

    PointsContainer.register(container);

    container.bind<HttpServer>(Types.HttpServer).to(HttpServer);
    container.bind<IMediator>(Types.Mediator).to(Mediator);
    container.bind<Container>(Types.Container).toConstantValue(container);

    return container;
  }
}
