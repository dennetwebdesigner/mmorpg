import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/authConfig';
import { erroCustom } from './../Error/CreateErrorService';

export class ValidateToken {
	async verify(token: string): Promise<string | any> {
		try {
			const verifyToken = promisify<string, string>(jwt.verify);
			const decoded = (await verifyToken(token, authConfig.secret)) as any;
			const userId = decoded.userId;
			return userId;
		} catch (error: any) {
			erroCustom.encode({ status: 400, message: 'token não é valido' });
			return error;
		}
	}
}
