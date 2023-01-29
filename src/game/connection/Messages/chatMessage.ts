import { Socket } from 'socket.io';

import {
	receiveClient,
	sendMe,
	sendWorld,
} from './../../connection/connectionMethods';

export const receiveMessage = (connection: Socket) => {
	receiveClient(connection, 'chatMessage', ({ message, id }) => {
		sendMe(connection, 'chatMessage', { message, id });
		sendWorld(connection, 'chatMessage', { message, id });
	});
};
