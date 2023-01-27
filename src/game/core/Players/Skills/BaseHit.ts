import { Socket } from 'socket.io';

import Area2D from '../../Area2D';
import { findAllPlayer, findByIdPlayer } from './../../../servers/Auth';
import { sendMe, sendWorld } from './../../helper/Server/connection';

export default class BaseHit {
	public player: any;
	public active: boolean;
	public size: { width: number; height: number };
	public position: { x: number; y: number };
	constructor(player: any) {
		this.player = player;
		this.active = false;
		this.size = {
			width: this.player.size.width * 1.7,
			height: this.player.size.height * 1.7,
		};

		this.position = {
			x: this.player.position.x,
			y: this.player.position.y,
		};
	}

	correction_position_area(player) {
		if (player.direction.last == 'down') {
			this.position.y = player.position.y + player.size.height * 1.7;
			this.position.x = player.position.x;
		}
		if (player.direction.last == 'up') {
			this.position.y = player.position.y - player.size.height * 1.7;
			this.position.x = player.position.x;
		}
		if (player.direction.last == 'left') {
			this.position.x = this.position.x - this.size.width;
			this.position.y = player.position.y;
		}
		if (player.direction.last == 'right') {
			this.position.x = this.position.x + this.size.width;
			this.position.y = player.position.y;
		}
	}

	async start(connection: Socket, id: string) {
		if (this.player.cooldown.base_hit) {
			return;
		}
		const players = await findAllPlayer();
		const test = await findByIdPlayer(id);
		this.correction_position_area(test);

		for (let index = 0; index < Object.keys(players).length; index++) {
			const player = Object.values(players)[index] as any;
			const area2D = new Area2D();
			if (player.id != id) {
				const target = await area2D.detect_body(player, {
					position: this.position,
					size: this.size,
				});
				if (target && target.id != id) {
					this.damage(connection, target);
					this.player.cooldown.base_hit = true;
					setTimeout(() => (this.player.cooldown.base_hit = false), 2000);
				}
			}
		}
	}

	damage(connection, target) {
		const take_damage = Math.floor(
			Math.random() *
				(this.player.attributes.attack.max -
					this.player.attributes.attack.min +
					1) +
				this.player.attributes.attack.min
		);

		target.attributes.life.current -= take_damage;
		sendMe(connection, 'skill/hit_base', {
			id: target.id,
			life: { current: target.attributes.life.current },
			logMessage: `você infligiu ${take_damage} de dano ao ${target.name}`,
		});
		sendWorld(connection, 'skill/hit_base', {
			id: target.id,
			life: { current: target.attributes.life.current },
			logMessage: `você recebeu ${take_damage} de dano de ${target.name}`,
		});
	}
}
