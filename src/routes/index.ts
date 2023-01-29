import { Router } from 'express';
import express from 'express';
import { resolve } from 'path';

import { apiRouter } from './api';
import { editorRouter } from './editor';
import { gameRouter } from './game';

const router = Router();

gameRouter.use(express.static(resolve(__dirname, '..', 'public', 'mmorpg')));

gameRouter.use(
	'/static',
	express.static(resolve(__dirname, '..', 'public', 'mmorpg'))
);

router.use(gameRouter);
router.use('/editor', editorRouter);
router.use('/api', apiRouter);

export { router };
