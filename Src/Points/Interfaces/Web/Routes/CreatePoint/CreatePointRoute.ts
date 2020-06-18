import { injectable } from "inversify";
import { Request, Router } from "express";
import { BaseRoute } from "Shared/Interfaces/Web/Contracts/BaseRoute";
import { CreatePointCommand } from "Points/Application/CreatePoint/CreatePointCommand";
import { CreatePointRequest } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointResquet";
import { CreatePointAddressDto } from "Points/Application/CreatePoint/CreatePointAddressDto";
import { CreatePointProductDto } from "Points/Application/CreatePoint/CreatePointProductDto";
import { CreatePointAddress } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointAddress";
import { CreatePointProducts } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointProducts";
import { InvalidRequestError } from "Shared/Interfaces/Web/Contracts/InvalidRequestError";

@injectable()
export class CreatePointRoute extends BaseRoute {
  public async buildInput(request: Request): Promise<CreatePointCommand> {
    const createPointRequest = new CreatePointRequest(request);
    const createPointRequestResult = createPointRequest.validate();

    if (!createPointRequestResult.isValid) {
      throw new InvalidRequestError(createPointRequestResult.errors);
    }

    return new CreatePointCommand(
      createPointRequest.body.name,
      createPointRequest.body.image,
      createPointRequest.body.email,
      createPointRequest.body.phoneMobile,
      this.createAddressDto(createPointRequest.body.address),
      this.createProductsDto(createPointRequest.body.products),
    );
  }

  public configure(router: Router): void {
    router.post("/points", this.handle.bind(this));
  }

  private createAddressDto(address: CreatePointAddress): CreatePointAddressDto {
    return new CreatePointAddressDto(
      address.latitude,
      address.longitude,
      address.street,
      address.number,
      address.neighborhood,
      address.city,
      address.state,
    );
  }

  private createProductsDto(products: CreatePointProducts[]): CreatePointProductDto[] {
    return products.map((product) => new CreatePointProductDto(product.id));
  }
}
