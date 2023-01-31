import { gameSettings } from './Game';
import { Map001 } from './maps/Map001';

export const collisionBody = (player: any) => {
	Map001.forEach((coll, iColl) => {
		coll.forEach((row, irow) => {
			const body = {
				tile: row,
				position: {
					x: irow * gameSettings.resolution,
					y: iColl * gameSettings.resolution,
				},
				size: {
					width: gameSettings.box,
					height: gameSettings.box,
				},
			};

			const player_left = player.position.x;
			const player_right = player.position.x + player.size.width;
			const player_top = player.position.y;
			const player_down = player.position.y + player.size.height;

			const body_right = body.position.x + body.size.width;
			const body_left = body.position.x;
			const body_top = body.position.y;
			const body_down = body.position.y + body.size.height;

			if (
				player_right > body_left &&
				player_left < body_right &&
				player_down > body_top &&
				player_top < body_down
			) {
				if (
					player_left < body_right &&
					player_left > body_right - 5 &&
					body.tile == 1
				) {
					player.position.x = body.position.x + player.size.width;
				} else if (
					player_right > body_left &&
					player_right < body_left + 5 &&
					body.tile == 1
				) {
					player.position.x = body.position.x - player.size.width;
				} else if (
					player_top < body_down &&
					player_top > body_down - 5 &&
					body.tile == 1
				) {
					player.position.y = body.position.y + player.size.height;
				} else if (
					player_down > body_top &&
					player_down < body_top + 5 &&
					body.tile == 1
				) {
					player.position.y = body.position.y - player.size.height;
				}
			}
		});
	});
};

// function collision(player, body) {
// 	const player_left = player.position.x;
// 	const player_right = player.position.x + player.size.width;
// 	const player_top = player.position.y;
// 	const player_down = player.position.y + player.size.height;

// 	const body_right = body.position.x + body.size.width;
// 	const body_left = body.position.x;
// 	const body_top = body.position.y;
// 	const body_down = body.position.y + body.size.height;

// 	if (
// 		player_left < body_right &&
// 		player_left > body_right - COLLISION_THRESHOLD &&
// 		player_top < body_down &&
// 		player_down > body_top
// 	) {
// 		player.position.x = body.position.x + player.size.width;
// 		return true;
// 	} else if (
// 		player_right > body_left &&
// 		player_right < body_left + COLLISION_THRESHOLD &&
// 		player_top < body_down &&
// 		player_down > body_top
// 	) {
// 		player.position.x = body.position.x - player.size.width;
// 		return true;
// 	}

// 	if (
// 		player_top < body_down &&
// 		player_top > body_down - COLLISION_THRESHOLD &&
// 		player_left < body_right &&
// 		player_right > body_left
// 	) {
// 		player.position.y = body.position.y + player.size.height;
// 		return true;
// 	} else if (
// 		player_down > body_top &&
// 		player_down < body_top + COLLISION_THRESHOLD &&
// 		player_left < body_right &&
// 		player_right > body_left
// 	) {
// 		player.position.y = body.position.y - player.size.height;
// 		return true;
// 	}
// }

// const COLLISION_THRESHOLD = 5;

// export const collisionBody = (player: any) => {
// 	Map001.forEach((coll, iColl) => {
// 		coll.forEach((row, irow) => {
// 			const body = {
// 				tile: row,
// 				position: {
// 					x: irow * 32,
// 					y: iColl * 32,
// 				},
// 				size: {
// 					width: 32 * 1.7,
// 					height: 32 * 1.7,
// 				},
// 			};

// 			if (body.tile === 1 && collision(player, body)) {
// 				return;
// 			}
// 		});
// 	});
// };
