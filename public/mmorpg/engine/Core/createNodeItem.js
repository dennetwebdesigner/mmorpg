import { Game } from './canvasSettings.js'

export const NodeItem = (nodeItemSettings) => {

    let { position, sprite, spriteCutPosition } = nodeItemSettings

    Game.brushTool.drawImage(
        sprite,
        spriteCutPosition.x * Game.display.box,
        spriteCutPosition.y * Game.display.box,
        Game.display.box,
        Game.display.box,
        position.x,
        position.y,
        Game.display.box,
        Game.display.box
    )
}

export const TextNodeItem = ({ size, text, position, style }) => {
    Game.brushTool.fillStyle = style.color
    Game.brushTool.font = `${size}px Arial`;
    Game.brushTool.fillText(text, position.x, position.y);
}