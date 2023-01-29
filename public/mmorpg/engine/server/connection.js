import { sendServer, receiveServer } from '../../utils/connection.js';
import { Game_start } from '../Core/GAME.js';
import ConnectionsList from './index.js';

export const userSettings = { id: null };

export const game_connection = (socket) => {
    receiveServer(socket, 'getUserIDServer', (data) => {
        userSettings.id = data.id;
    });

    // socket.on('getUserIDServer', (data) => {
    //     userSettings.id = data.id;
    // });

    const game = new Game_start(socket);
    game.init();

    // sendServer(socket, 'test', { test: 'resultado da conexão' });

    // socket.on('test', (data) => {
    //     console.log(data.world);
    // });

    ConnectionsList.forEach((itemsConnection) => {
        itemsConnection(socket);
    });
};