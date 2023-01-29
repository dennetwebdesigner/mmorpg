import { CreateTokenService } from '../../Token/CreateTokenService';
import { CreateAuthController } from './CreateAuthController';
import { CreateAuthService } from './CreateAuthService';

const createTokenService = new CreateTokenService();
const createAuthService = new CreateAuthService(createTokenService);
export const createAuthController = new CreateAuthController(createAuthService);
