class ErrorService {
	encode(data: any) {
		throw new Error(JSON.stringify(data));
	}

	async decode(data: any, callback: any = null) {
		const parse = JSON.parse(data);
		if (!callback) return parse;
		return callback(data);
	}
}

export const erroCustom = new ErrorService();
