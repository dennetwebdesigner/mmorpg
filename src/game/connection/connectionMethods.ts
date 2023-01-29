import { Socket } from 'socket.io';

import { decode, encode } from '../core/helper/other/bufferDataConvert';

export const sendServer = async (
	connection: Socket,
	sign: string,
	data: any
): Promise<void> => {
	const encodeBufferArray = await encode(data);
	connection.emit(sign, encodeBufferArray);
	connection.broadcast.emit(sign, encodeBufferArray);
};

export const sendMe = async (
	connection: Socket,
	sign: string,
	data: any
): Promise<void> => {
	const encodeBufferArray = await encode(data);
	connection.emit(sign, encodeBufferArray);
};

export const sendWorld = async (
	connection: Socket,
	sign: string,
	data: any
): Promise<void> => {
	const encodeBufferArray = await encode(data);
	connection.broadcast.emit(sign, encodeBufferArray);
};

export const receiveClient = async (
	socket: Socket,
	sign: string,
	callback: any
) => {
	socket.on(sign, async (encodeBufferArray: ArrayBufferLike) => {
		const data = await decode(encodeBufferArray);
		await callback(data);
	});
};
