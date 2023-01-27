import { Socket } from 'socket.io';

import BaseHit from '../../Players/Skills/BaseHit';
import { gameSettings } from './../../Game';
import { PlayerDTO } from './PlayerDTO';
import { Status } from './Status';

export default class Player {
	public position;
	public size;
	public style;
	public name: string;
	public id: string;
	public attributes;
	public sprite: string;
	public direction: {
		last: string;
		walk: boolean;
	};
	public skill: {
		baseHit: BaseHit;
	};
	public connection: Socket | null;
	public cooldown: {
		base_hit: boolean;
	};

	constructor({
		position,
		size,
		style,
		name,
		id,
		attributes,
		sprite,
		direction,
		connection,
	}: PlayerDTO) {
		this.name = name;
		this.id = id || (this.getRandomColor() as string);
		this.position = position || {
			x: 0,
			y: 0,
		};

		this.size = size || {
			width: gameSettings.box,
			height: gameSettings.box,
		};

		this.attributes = !attributes ? new Status({}) : new Status(attributes);

		this.sprite = sprite
			? './engine/assets/img/Male/' + sprite + '.png'
			: './engine/assets/img/Male/character.png';

		this.direction = direction || { last: 'down', walk: false };
		this.connection = connection || null;

		this.cooldown = {
			base_hit: false,
		};
	}

	getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	base_hit(id): BaseHit {
		return new BaseHit(this);
	}
}
