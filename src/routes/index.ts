import { Router } from 'express';
import express from 'express';
import { resolve } from 'path';

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

export { router };
