import ejs from 'ejs';
import { Router } from 'express';
import express from 'express';
import { resolve } from 'path';


import { allTiles } from '../../services/Tile/tiles';


const app = express();
const editorRouter = Router();

editorRouter.use(
	express.static(resolve(__dirname, '..', '..', '..', 'public', 'editor'))
);

app.set('views', resolve(__dirname, 'public'));
app.engine('html', ejs.renderFile);
app.set('views engine', 'html');

editorRouter.get('/', async (req, res) => {
	return res.render('editor/index.html');
});

editorRouter.get('/assets/all-tiles', async (req, res) => {
	const tiles = await allTiles();
	return res.json(tiles);
});

export { editorRouter };
