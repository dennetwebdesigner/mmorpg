import Player from '../core/models/Player/Player';


const AuthServer: any = {};

export const store = async (data: any): Promise<any> => {
	AuthServer[data.id] = data;
	return;
};

export const remove = async (id: string) => {
	const data = await findByIdPlayer(id);
	if (!data || !delete AuthServer[data.id]) {
		return { name: 'Guest' };
	}
	return data;
};

export const findAllPlayer = (): any => {
	return AuthServer;
};

export const findByIdPlayer = async (id: string): Promise<Player> => {
	for (let index = 0; index < Object.keys(AuthServer).length; index++) {
		const player = Object.values(AuthServer)[index] as any;

		if (player.id == id) {
			return player;
		}
	}
};

export const findByNamePlayer = async (name: string): Promise<any> => {
	const player = Object.keys(AuthServer).find((item) => {
		if (AuthServer[item].name == name) return AuthServer[item];
	});
	return player as any;
};

export const change_state_auth = async (id: string, update: any) => {
	const where = Object.keys(update) as any as string;
	console.log(AuthServer[id]);
};
