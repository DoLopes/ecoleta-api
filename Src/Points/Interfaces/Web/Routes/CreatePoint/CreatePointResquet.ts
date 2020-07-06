import { Request } from "express";
import { plainToClass } from "class-transformer";
import { IsDefined, ValidateNested } from "class-validator";
import { CreatePointBody } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointBody";
import { BaseRequest } from "Shared/Interfaces/Web/Entities/BaseRequest";

export class CreatePointRequest extends BaseRequest {
  @IsDefined()
  @ValidateNested()
  public body!: CreatePointBody;

  public constructor(data: Request) {
    super();
    this.body = plainToClass(CreatePointBody, data.body);
  }
}
