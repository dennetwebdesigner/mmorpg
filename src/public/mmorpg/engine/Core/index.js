import { game_connection } from '../server/connection.js'

const url = `${window.location.protocol}//${window.location.host}`
export const socket = io(url, { cors: { origin: '*' } })
game_connection(socket)