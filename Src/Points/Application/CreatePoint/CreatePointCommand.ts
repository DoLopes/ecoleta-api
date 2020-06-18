import { CreatePointAddressDto } from "Points/Application/CreatePoint/CreatePointAddressDto";
import { CreatePointProductDto } from "Points/Application/CreatePoint/CreatePointProductDto";

export class CreatePointCommand {
  public constructor(
    public name: string,
    public image: string,
    public email: string,
    public phoneMobile: string,
    public address: CreatePointAddressDto,
    public products: CreatePointProductDto[],
  ) {}
}
