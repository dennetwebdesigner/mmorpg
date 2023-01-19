import { server } from './server';

// Passamos a porta onde o servidor ficará ouvindo
server.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port: ${process.env.PORT || 3000}`);
});
