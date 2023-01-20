import NodeObjectList from '../GameListObjects.js'
export const collisionBody = (body = { tile: null, position, size }) => {

    Object.values(NodeObjectList).forEach(player => {

        const right = player.position.x <= body.position.x + body.size.width
        const left = player.position.x + player.size.width >= body.position.x
        const top = player.position.y <= body.position.y + body.size.height
        const down = player.position.y + player.size.height >= body.position.y

        if (right && left && top && down && body.tile > 0) {

            if (
                player.position.x <= body.position.x + body.size.width &&
                player.position.x >= body.position.x + body.size.width - 50
            ) {
                player.position.x = body.position.x + player.size.width
            } else if (
                player.position.x + player.size.width >= body.position.x &&
                player.position.x + player.size.width <= body.position.x + 50
            ) {
                player.position.x = body.position.x - player.size.width
            }

        }
    });
}