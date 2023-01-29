import { ValidateToken } from '../../Token/ValidateToken';
import { MidAuthController } from './MidAuthController';
import { MidAuthService } from './MidAuthService';


const validateToken = new ValidateToken();
const midAuthService = new MidAuthService(validateToken);
export const midAuthController = new MidAuthController(midAuthService);
