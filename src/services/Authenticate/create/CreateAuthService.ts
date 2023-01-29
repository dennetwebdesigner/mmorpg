import { CreateTokenService } from '../../Token/CreateTokenService';
import { erroCustom } from './../../Error/CreateErrorService';
import { CreateAuthDTO } from './CreateAuthDTO';

export class CreateAuthService {
	private entity: CreateTokenService;
	constructor(entity: CreateTokenService) {
		this.entity = entity;
	}

	async execute(data: CreateAuthDTO): Promise<any | string> {
		const { username, password } = data;
		if (!username || !password) {
			erroCustom.encode({
				status: 400,
				message: 'usuário ou senha faltando!',
			});
			return;
		}

		const token = await this.entity.encode({ id: username });
		return token;
	}
}
