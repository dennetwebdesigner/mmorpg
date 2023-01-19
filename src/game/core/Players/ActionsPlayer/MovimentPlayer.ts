import { collisionBody } from './../../CollisionObjects'
import { PlayerDTO } from '../../models/Player/PlayerDTO'
import { findByIdPlayer } from '../../../servers/Auth'

export const moviment_player = async (data: any): Promise<void> => {
  const player = await findByIdPlayer(data.id)

  collisionBody(player)

  player.direction.walk =
    data.moviment.y == 'idle' && data.moviment.x == 'idle' ? false : true

  if (data.moviment.y == 'up') {
    player.direction.last = 'up'
    player.position.y -= player.attributes.speed
  } else if (data.moviment.y == 'down') {
    player.direction.last = 'down'
    player.position.y += player.attributes.speed
  }

  if (data.moviment.x == 'left') {
    player.direction.last = 'left'
    player.position.x -= player.attributes.speed
  } else if (data.moviment.x == 'right') {
    player.direction.last = 'right'
    player.position.x += player.attributes.speed
  }
}
