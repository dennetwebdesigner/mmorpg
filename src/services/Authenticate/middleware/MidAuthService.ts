import { erroCustom } from './../../Error/CreateErrorService';
import { ValidateToken } from './../../Token/ValidateToken';
import { MidAuthDTO } from './MidAuthDTO';

export class MidAuthService {
	private entity: ValidateToken;
	constructor(entity: ValidateToken) {
		this.entity = entity;
	}

	async execute(data: MidAuthDTO): Promise<string | any> {
		if (!data.token) {
			erroCustom.encode({ status: 400, message: 'token não encontrado!' });
			return;
		}

		const [_, token] = data.token.split(' ');

		const userId = await this.entity.verify(token);
		return userId;
	}
}
