import { Router, Request, Response, NextFunction } from 'express';

import { midAuthController } from './';

const MidAuthRouter = Router();

MidAuthRouter.get(
	'/mid/test',
	async (req: Request, res: Response, next: NextFunction) => {
		midAuthController.handleExpress(req, res, next);
	},
	async (req: Request, res: Response) => {
		res.json({ auth: 'passou' });
	}
);

export { MidAuthRouter };
