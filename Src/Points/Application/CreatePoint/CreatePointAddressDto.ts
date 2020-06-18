export class CreatePointAddressDto {
  public constructor(
    public latitude: number,
    public longitude: number,
    public street: string,
    public number: string,
    public neighborhood: string,
    public city: string,
    public state: string,
  ) {}
}
