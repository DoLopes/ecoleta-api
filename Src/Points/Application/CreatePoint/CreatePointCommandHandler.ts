import { injectable } from "inversify";
import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";
import { ApplicationEvents } from "Shared/Application/Enums/ApplicationEvents";
import { CreatePointCommand } from "Points/Application/CreatePoint/CreatePointCommand";

@injectable()
export class CreatePointCommandHandler {
  public async handle(command: CreatePointCommand): Promise<ApplicationResult> {
    // eslint-disable-next-line no-console
    console.log(command);

    return new ApplicationResult(ApplicationEvents.SUCCESS);
  }
}
