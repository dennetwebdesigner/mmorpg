import { showLog } from '../../UI/Methods/LogMessages.js';
import { GameListObjectsInGM } from '../../assets/GameListObjects.js';

export const _moviment_player = (connection) => {
    connection.on('_walk_stop', ({ id, direction }) => {
        GameListObjectsInGM[id].direction.walk = direction.walk;
    });

    connection.on('_moviment_player', ({ id, position, direction }) => {
        GameListObjectsInGM[id].position = position;
        GameListObjectsInGM[id].direction = direction;
    });

    connection.on('skill/hit_base', (data) => {
        GameListObjectsInGM[data.id].attributes.life.current = data.life.current;
        showLog(data.logMessage);
    });
};
