import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import { OK } from "http-status-codes";
import { useContainer, useExpressServer } from "routing-controllers";
import { DIContainer } from "DIContainer";

export class HttpServer {
  public static create(): Express {
    const server = express();

    server.use(bodyParser.text());
    server.use(bodyParser.json());
    server.use(cors());
    server.use(helmet());

    useContainer(DIContainer.create())

    useExpressServer(server, {
      validation: true,
    });

    server.get("/", (_req, res) => res.status(OK).send());

    return server;
  }
}
