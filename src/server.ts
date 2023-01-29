import cors from 'cors';
import express from 'express';
import http from 'http';

import { serverSocket } from './game/core/helper/Server/connection';
import { router } from './routes';

const app = express();
const server = http.createServer(app);

// allow access from clients
app.use(cors());
app.use(express.json());

// Desativa o X-Powered-By: Express
app.disable('x-powered-by');

export const wsSocket = serverSocket(server);

app.use(router);

export { server, app };
