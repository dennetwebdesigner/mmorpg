import fs from 'fs/promises';
import sizeOf from 'image-size';
import { resolve } from 'path';
import { promisify } from 'util';

export const allTiles = async (): Promise<any> => {
	const dirFiles = await fs.readdir(
		resolve('src', 'public', 'editor', 'imgs', 'tileset')
	);
	const allTile: any = {};
	for (let index = 0; index < dirFiles.length; index++) {
		const item = dirFiles[index];
		const size = await promisify(sizeOf)(
			resolve('src', 'public', 'editor', 'imgs', 'tileset', item)
		);
		allTile[item] = size;
	}
	return allTile;
};
