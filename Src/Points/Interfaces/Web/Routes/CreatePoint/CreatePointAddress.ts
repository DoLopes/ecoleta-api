import { IsString, IsNumber } from "class-validator";

export class CreatePointAddress {
  @IsNumber()
  public latitude!: number;

  @IsNumber()
  public longitude!: number;

  @IsString()
  public street!: string;

  @IsString()
  public number!: string;

  @IsString()
  public neighborhood!: string;

  @IsString()
  public city!: string;

  @IsString()
  public state!: string;
}
