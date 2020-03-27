import express from "express";
import { get } from "lodash";

const DEFAULT_HTTP_PORT = 3000;

const app = express();
const server = app.listen(DEFAULT_HTTP_PORT);

const address = server.address();
const port = get(address, "port", 0);

console.log(`Application listening on port ${port}`);
