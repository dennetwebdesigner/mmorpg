import { Router } from 'express';

import { editorRouter } from './editor';
import { gameRouter } from './game';

const router = Router();

router.use(gameRouter);
router.use('/editor', editorRouter);

export { router };
