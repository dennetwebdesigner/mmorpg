import { NextFunction, Request, Response } from 'express';
import { Socket } from 'socket.io';

import { remove } from '../../../game/servers/Auth';
import { erroCustom } from './../../Error/CreateErrorService';
import { MidAuthService } from './MidAuthService';

export class MidAuthController {
	private service: MidAuthService;
	constructor(service: MidAuthService) {
		this.service = service;
	}
	async handleExpress(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response> {
		const token = req.headers.authorization;
		try {
			const userId = await this.service.execute({ token });
			console.log('token validate: ', userId);
			next();
		} catch (error) {
			const { status, message } = await erroCustom.decode(error.message);
			return res.status(status).json({ message });
		}
	}

	async handleSocket(connection: Socket) {
		const { token } = connection.handshake.auth;
		try {
			const userId = await this.service.execute({ token });
			console.log(userId);
		} catch (error) {
			const { status, message } = await erroCustom.decode(error.message);
			console.log(status, message);
			remove(connection.id);
			connection.disconnect();
		}
	}
}
