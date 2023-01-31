import { GameListObjectsInGM } from '../GameListObjects.js';
import { TextNodeItem } from '../../Core/createNodeItem.js';
import { Game } from '../../Core/canvasSettings.js';

export const draw_tag_name = (id) => {
    const player = GameListObjectsInGM[id];
    const text = {
        text: player.name,
        font: `7px Arial`,
        position: {
            x: player.position.x,
            y: player.position.y,
        },
        style: { color: 'black' },
    };
    if (player.position.y - 12 < 0) text.position.y = player.position.y + 23;
    else text.position.y = player.position.y - 2;

    let metrics = Game.brushTool.measureText(text.text);
    let fontHeight =
        metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    let actualHeight =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    let w = metrics.width;
    if (w > player.size.width * Game.camera.scale) {
        const center =
            player.position.x - (player.size.width * Game.camera.scale) / 2;
        text.position.x = center;
    }
    if (w < player.size.width * Game.camera.scale) {
        const txtMid = text.position.x + w / 2;
        const playerMid =
            player.position.x + (player.size.width * Game.camera.scale) / 2;
        const calculateDifference = playerMid - txtMid;
        text.position.x = text.position.x + calculateDifference;
    }
    TextNodeItem(text);
};
