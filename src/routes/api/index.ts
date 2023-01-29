import { Router } from 'express';

import { CreateAuthRouter } from '../../services/Authenticate/create/CreateAuthRouter';
import { MidAuthRouter } from '../../services/Authenticate/middleware/MidAuthRouter';

const apiRouter = Router();

apiRouter.use(CreateAuthRouter);
apiRouter.use(MidAuthRouter);

apiRouter.get('/', (req, res) => {
	return res.json({ api: 'online' });
});

export { apiRouter };
