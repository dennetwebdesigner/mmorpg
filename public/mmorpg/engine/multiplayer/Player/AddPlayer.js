import { receiveServer } from '../../../utils/connection.js';
import { generate_all_player } from '../../assets/GameListObjects.js';
import { removeLoginElements } from '../../UI/Methods/LoginPlayer.js';
import { enabledShowLog, showLog } from '../../UI/Methods/LogMessages.js';


export const _receive_setup = (connection) => {
    receiveServer(connection, 'registered_in_server', (data) => {
        removeLoginElements();
        enabledShowLog();
        showLog(data.message);
        generate_all_player(data.setup);
    });
};