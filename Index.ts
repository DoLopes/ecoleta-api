import "reflect-metadata";

import { HttpServer } from "Shared/Interfaces/Web/HttpServer";

const port = process.env.PORT ?? "3000";

const server = HttpServer.create();

server.listen(port, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Application listening on port ${port}`);
});
