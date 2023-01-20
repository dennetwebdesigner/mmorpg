import ejs from 'ejs';
import { Router } from 'express';
import express from 'express';
import { resolve } from 'path';

const app = express();
const gameRouter = Router();

gameRouter.use(
	express.static(resolve(__dirname, '..', '..', '..', 'public', 'mmorpg'))
);

app.set('views', resolve(__dirname, 'public'));
app.engine('html', ejs.renderFile);
app.set('views engine', 'html');

gameRouter.get('/', async (req, res) => {
	return res.render('mmorpg/index.html');
});

export { gameRouter };
