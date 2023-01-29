import { receiveServer, sendServer } from '../../../utils/connection.js';
import GameListObjectsInGM from '../../assets/GameListObjects.js';
import { showLog } from '../../UI/Methods/LogMessages.js';
import UI from '../../UI/UIObjectsList.js';

export const sendMessage = async(connection) => {
    UI.Inputs.sendMessage.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = e.target.elements.messages.value;

        if (message) {
            sendServer('chatMessage', { message, id: connection.id });
            e.target.elements.messages.value = '';
        }
    });
};

export const receiveMessage = async(connection) => {
    receiveServer(connection, 'chatMessage', ({ message, id }) => {
        const name = GameListObjectsInGM[id].name;
        showLog(`${name}: ${message}`);
    });
};