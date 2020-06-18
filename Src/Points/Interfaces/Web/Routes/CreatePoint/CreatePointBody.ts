import { IsString, IsEmail, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatePointAddress } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointAddress";
import { CreatePointProducts } from "Points/Interfaces/Web/Routes/CreatePoint/CreatePointProducts";

export class CreatePointBody {
  @IsString()
  public name!: string;

  @IsString()
  public image!: string;

  @IsEmail()
  public email!: string;

  @IsString()
  public phoneMobile!: string;

  @ValidateNested()
  @Type(() => CreatePointAddress)
  public address!: CreatePointAddress;

  @ValidateNested()
  @Type(() => CreatePointProducts)
  public products!: CreatePointProducts[];
}
