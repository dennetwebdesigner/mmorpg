import {
    receiveServer
} from '../../../utils/connection.js';
import {
    GameListObjectsInGM
} from '../../assets/GameListObjects.js';
import {
    showLog
} from '../../UI/Methods/LogMessages.js';

export const _moviment_player = (connection) => {
    receiveServer(connection, '_walk_stop', ({
        id,
        direction
    }) => {
        GameListObjectsInGM[id].direction.walk = direction.walk;
    });

    receiveServer(
        connection,
        '_moviment_player',
        ({
            id,
            position,
            direction
        }) => {
            GameListObjectsInGM[id].position = position;
            GameListObjectsInGM[id].direction = direction;
        }
    );

    receiveServer(connection, 'skill/hit_base', (data) => {
        const player = GameListObjectsInGM[data.id];
        player.attack.position = data.positionSkill;
        player.attack.active = true;
        player.attributes.life.current = data.life.current;
        showLog(data.logMessage);
    });
};
