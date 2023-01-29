import { receiveServer } from '../../../utils/connection.js';
import { generate_player } from '../../assets/GameListObjects.js';
import { setAudio } from '../../Core/Audio/createAudio.js';
import { showLog } from '../../UI/Methods/LogMessages.js';

/**
 * get server side new player has connected
 * @param {*} connection
 */
export const _update_server = (connection) => {
    receiveServer(connection, '_logged_new_player', (data) => {
        showLog(data.message);
        generate_player(data.change);
        setAudio({ remove: true });
    });
};