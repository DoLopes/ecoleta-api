import { Request } from "express";
import { plainToClass } from "class-transformer";
import { IsDefined, ValidateNested } from "class-validator";
import { CreatePointBody } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointBody";

export class CreatePointRequest {
  @IsDefined()
  @ValidateNested()
  public body!: CreatePointBody;

  public constructor(data: Request) {
    this.body = plainToClass(CreatePointBody, data.body);
  }
}
