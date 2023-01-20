import { GameListObjectsInGM } from '../GameListObjects.js'
import { TextNodeItem } from '../../Core/createNodeItem.js'
export const draw_tag_name = (id) => {
    const player = GameListObjectsInGM[id]
    const text = {
        text: player.name,
        size: 10,
        position: {
            x: player.position.x,
            y: player.position.y,
        },
        style: { color: 'black' }
    }
    if (player.position.y - 12 < 0) text.position.y = player.position.y + 23
    else text.position.y = player.position.y - 2

    TextNodeItem(text)
}