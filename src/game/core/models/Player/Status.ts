interface iLife {
	max: number;
	current: number;
	zero: number;
}
interface iAttack {
	min: number;
	max: number;
}

export class Status {
	public life: iLife;
	public attack: iAttack;
	public speed: number;
	constructor({
		life,
		attack,
		speed,
	}: {
		life?: iLife;
		attack?: iAttack;
		speed?: number;
	}) {
		this.life = {
			max: 30,
			current: 0,
			zero: 0,
		};
		this.attack = {
			max: 3,
			min: 1,
		};
		this.speed = 0.9;

		this.set_default({ life, attack, speed });
	}

	async set_default({
		life,
		attack,
		speed,
	}: {
		life?: iLife;
		attack?: iAttack;
		speed?: number;
	}): Promise<void> {
		if (life) this.life = life;
		else this.life.current = this.life.max;
		if (attack) this.attack = attack;
		if (speed) this.speed = speed;
	}
}
