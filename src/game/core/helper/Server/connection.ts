import { Server } from 'http';
import socketio, { Socket } from 'socket.io';

import { midAuthController } from '../../../../services/Authenticate/middleware';
import { receiveClient as conClient } from '../../../connection/connectionMethods';
import { connectServer } from '../../../connection/ConnectServer';
import { disconnectServer } from '../../../connection/DisconnectServer';
import { findAllPlayer } from './../../../servers/Auth';

export const firstClient: {
	socket: null | Socket;
	id: string;
} = {
	socket: null,
	id: '',
};

const _conection_server = (connetion: Socket) => {
	connectServer.forEach((itemConnected) => {
		itemConnected(connetion);
	});
};

const _player__disconnected = (connection: socketio.Socket) => {
	connection.on('disconnect', () => {
		disconnectServer.forEach((itemConnected) => {
			itemConnected(connection);
		});
	});
};

export const serverSocket = (server: Server) => {
	const io = new socketio.Server(server, {
		cors: {
			origin: '*',
		},
	});

	io.on('connection', async (socket: Socket) => {
		if (!firstClient.socket && !firstClient.id) {
			firstClient.id = socket.id;
			firstClient.socket = socket;
		}

		// testes by connections and response
		await conClient(socket, 'test', (data: any) => {
			console.log(data);
		});

		// User all connection responsibility
		_conection_server(socket);

		// User all disconnection responsibility
		_player__disconnected(socket);
	});
	return io;
};
