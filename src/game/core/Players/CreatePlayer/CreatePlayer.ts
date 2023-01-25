import PlayerModel from '../../models/Player/Player';
import { PlayerDTO } from '../../models/Player/PlayerDTO';

export const create_player = (data: PlayerDTO) => {
	const player = new PlayerModel({
		name: data.name,
		id: data.id,
	});
	return player;
};
