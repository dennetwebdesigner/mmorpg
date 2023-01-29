import { Socket } from 'socket.io';

import { sendMe, sendWorld } from '../../connection/connectionMethods';
import { remove_player } from '../../core/Players/RemovePlayer/RemovePlayer';

export const disconnect_player = async (connection: Socket) => {
	const player = await remove_player(connection.id);
	await sendMe(connection, '_player_disconnect', {
		message: 'você foi desconectado',
	});
	await sendWorld(connection, '_player_disconnect', {
		message: `${player.name} foi desconectado`,
		player,
	});
};
