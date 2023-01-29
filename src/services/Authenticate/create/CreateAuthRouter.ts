import { Router, Request, Response } from 'express';

import { createAuthController } from './';

const CreateAuthRouter = Router();

CreateAuthRouter.post('/auth', async (req: Request, res: Response) => {
	createAuthController.handle(req, res);
});

export { CreateAuthRouter };
