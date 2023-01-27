import GameListObjectsInGM from '../../assets/GameListObjects.js';
import { Game } from '../canvasSettings.js';

export const mouseClick = (connection) => {
    window.addEventListener('mousedown', (e) => {
        if (e.target.getAttribute('id') == 'inputSendMessage') {
            Game.frameInput = 'external';
        } else {
            Game.frameInput = 'jogo';
        }

        Game.mouse.x = e.clientX - Game.mouse.rect.left;
        Game.mouse.y = e.clientY - Game.mouse.rect.top;
        if (Game.scene.all_scenes[Game.scene.current].click)
            Game.scene.all_scenes[Game.scene.current].click();

        Object.keys(GameListObjectsInGM).forEach((node) => {
            if (GameListObjectsInGM[node].type == 'player') {
                GameListObjectsInGM[node].click(connection);
            }
        });
    });
};
