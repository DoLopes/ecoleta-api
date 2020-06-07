import { injectable } from "inversify";
import { Response } from "express";
import { OK } from "http-status-codes";
import { JsonController, Get, Res } from "routing-controllers";

@injectable()
@JsonController()
export class HealthCheckController {
  @Get("/")
  public healthCheck(@Res() res: Response): Response {
    res.status(OK).send();
    return res;
  }
}
