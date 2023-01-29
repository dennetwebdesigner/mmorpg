export const encode = async (data: any) => {
	return new TextEncoder().encode(JSON.stringify(data)).buffer;
};

export const decode = async (data: ArrayBufferLike) => {
	const jsonString = new TextDecoder().decode(new Uint8Array(data));
	return JSON.parse(jsonString);
};
