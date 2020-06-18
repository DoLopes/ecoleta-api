import { IsUUID } from "class-validator";

export class CreatePointProducts {
  @IsUUID()
  public id!: string;
}
