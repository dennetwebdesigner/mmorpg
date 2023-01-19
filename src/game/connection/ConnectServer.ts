import { register_new_player } from './Players/ConnectPlayer'
import { register_key_pressed } from './Players/ActionsPlayer'
import { receiveMessage } from './Messages/chatMessage'
export const connectServer = [
  register_key_pressed,
  register_new_player,
  receiveMessage,
]
