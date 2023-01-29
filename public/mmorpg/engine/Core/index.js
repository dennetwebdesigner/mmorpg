import { game_connection } from '../server/connection.js';

const url = `${window.location.protocol}//${window.location.host}`;
export const socket = io(url, {
    cors: { origin: '*' },
    auth: {
        token: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJqb2F0YW4iLCJpYXQiOjE2NzQ5Mjk2MjksImV4cCI6MTY3NDkyOTY1OX0.6ihyTWCE1dV7JbNNg2uZI4eA5QTTDPNhSDMuBr3b7bk`,
    },
});
game_connection(socket);