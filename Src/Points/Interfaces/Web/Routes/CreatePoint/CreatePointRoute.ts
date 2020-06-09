import { injectable } from "inversify";
import { Request, Router } from "express";
import { BaseRoute } from "Shared/Interfaces/Web/Contracts/BaseRoute";
import { CreatePointCommand } from "Points/Application/CreatePoint/CreatePointCommand";
import { CreatePointRequest } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointResquet";

@injectable()
export class CreatePointRoute extends BaseRoute {
  public async buildInput(request: Request): Promise<CreatePointCommand> {
    const createPointRequest = new CreatePointRequest(request);

    return new CreatePointCommand(
      createPointRequest.body.name,
      createPointRequest.body.email,
      createPointRequest.body.password,
      createPointRequest.body.passwordConfirmation,
    );
  }

  public configure(router: Router): void {
    router.post("/points", this.handle.bind(this));
  }
}
