export class CreatePointCommand {
  public constructor(
    public name: string,
    public email: string,
    public password: string,
    public passwordConfirmation: string,
  ) {}
}
