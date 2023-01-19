import { gameSettings } from './Game'
import { Map001 } from './maps/Map001'
export const collisionBody = (player: any) => {
  Map001.forEach((coll, iColl) => {
    coll.forEach((row, irow) => {
      const body = {
        tile: row,
        position: {
          x: irow * gameSettings.resolution * 1.7,
          y: iColl * gameSettings.resolution * 1.7,
        },
        size: {
          width: gameSettings.box,
          height: gameSettings.box,
        },
      }

      const player_left = player.position.x
      const player_right = player.position.x + player.size.width
      const player_top = player.position.y
      const player_down = player.position.y + player.size.height

      const body_right = body.position.x + body.size.width
      const body_left = body.position.x
      const body_top = body.position.y
      const body_down = body.position.y + body.size.height

      if (
        player_left < body_right &&
        player_left > body_right - 5 &&
        player_top < body_down &&
        player_down > body_top &&
        body.tile == 1
      ) {
        player.position.x = body.position.x + player.size.width
      } else if (
        player_right > body_left &&
        player_right < body_left + 5 &&
        player_top < body_down &&
        player_down > body_top &&
        body.tile == 1
      ) {
        player.position.x = body.position.x - player.size.width
      }

      if (
        player_top < body_down &&
        player_top > body_down - 5 &&
        player_left < body_right &&
        player_right > body_left &&
        body.tile == 1
      ) {
        player.position.y = body.position.y + player.size.height
      } else if (
        player_down > body_top &&
        player_down < body_top + 5 &&
        player_left < body_right &&
        player_right > body_left &&
        body.tile == 1
      ) {
        player.position.y = body.position.y - player.size.height
      }
    })
  })
}
