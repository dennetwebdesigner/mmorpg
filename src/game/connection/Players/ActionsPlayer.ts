import { Socket } from 'socket.io';

import {
	receiveClient,
	sendMe,
	sendWorld,
} from '../../connection/connectionMethods';
import { moviment_player } from '../../core/Players/ActionsPlayer/MovimentPlayer';
import BaseHit from '../../core/Players/Skills/BaseHit';
import { findByIdPlayer } from './../../servers/Auth';

export const register_key_pressed = async (connection: Socket) => {
	receiveClient(connection, '_walk_stop', async (data: any) => {
		const player = await findByIdPlayer(connection.id);
		player.direction.walk = data.walk;
		sendMe(connection, '_walk_stop', {
			id: data.id,
			direction: player.direction,
		});
		sendWorld(connection, '_walk_stop', {
			id: data.id,
			direction: player.direction,
		});
	});

	receiveClient(connection, '_moviment_player', async (data: any) => {
		if (data.moviment) {
			await moviment_player(data);
			const player = await findByIdPlayer(connection.id);

			sendMe(connection, '_moviment_player', {
				id: data.id,
				position: player.position,
				direction: player.direction,
			});
			sendWorld(connection, '_moviment_player', {
				id: data.id,
				position: player.position,
				direction: player.direction,
			});
		}
	});

	receiveClient(connection, 'skill/hit_base', async ({ id }) => {
		const player = await findByIdPlayer(id);
		if (id == connection.id) player.base_hit(id).start(connection, id);
	});
};
93;
