import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/authConfig';
import { CreateTokenDTO } from './CreateTokenDTO';

export class CreateTokenService {
	async encode(data: CreateTokenDTO): Promise<string> {
		const create = promisify<{ userId: string }, string, { expiresIn: string }>(
			jwt.sign
		);
		const token = await create({ userId: data.id }, authConfig.secret, {
			expiresIn: authConfig.expiresIn,
		});
		return token as any as string;
	}
}
