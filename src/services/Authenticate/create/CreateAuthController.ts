import { Request, Response } from 'express';

import { erroCustom } from './../../Error/CreateErrorService';
import { CreateAuthService } from './CreateAuthService';

export class CreateAuthController {
	service: CreateAuthService;
	constructor(service: CreateAuthService) {
		this.service = service;
	}
	async handle(req: Request, res: Response): Promise<Response> {
		const { username, password } = req.body;

		try {
			const auth = await this.service.execute({ username, password });
			return res.status(200).json({ auth });
		} catch (error: any) {
			const { status, message } = await erroCustom.decode(error.message);
			return res.status(status).json({ error: message });
		}
	}
}
