import { receiveServer } from '../../../utils/connection.js';
import { GameListObjectsInGM } from '../../assets/GameListObjects.js';
import { showLog } from '../../UI/Methods/LogMessages.js';

export const _disconnection_server = (connection) => {
    receiveServer(connection, '_player_disconnect', (data) => {
        showLog(data.message);
        delete GameListObjectsInGM[data.player.id];
    });
};