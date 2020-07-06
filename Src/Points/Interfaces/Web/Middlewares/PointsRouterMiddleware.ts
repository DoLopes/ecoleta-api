import { Express, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Points/Interfaces/DI/Types";
import { IMiddleware } from "Shared/Interfaces/Web/Contracts/IMiddleware";
import { IRoute } from "Shared/Interfaces/Web/Resources/IRoute";

@injectable()
export class PointsRouterMiddleware implements IMiddleware {
  public constructor(
    @inject(Types.CreatePointRoute) private readonly createPointRoute: IRoute,
  ) {}

  public configure(server: Express): void {
    const router = Router();

    this.createPointRoute.configure(router);

    server.use(router);
  }
}
