import { Container } from "inversify";
import * as Types from "Points/Interfaces/DI/Types";
import { CreatePointCommandHandler } from "Points/Application/CreatePoint/CreatePointCommandHandler";
import { CreatePointRoute } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointRoute";
import { IHandler } from "Shared/Interfaces/Web/Contracts/IHandler";
import { PointsRouterMiddleware } from "Points/Interfaces/Web/Middlewares/PointsRouterMiddleware";
import { IMiddleware } from "Shared/Interfaces/Web/Contracts/IMiddleware";

export class PointsContainer {
  public static register(container: Container): Container {
    container.bind<CreatePointRoute>(Types.CreatePointRoute).to(CreatePointRoute);
    container.bind<IHandler>(Types.CreatePointCommandHandler).to(CreatePointCommandHandler);
    container.bind<IMiddleware>(Types.PointsRouterMiddleware).to(PointsRouterMiddleware);

    return container;
  }
}
