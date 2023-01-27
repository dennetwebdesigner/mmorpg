export default class Area2D {
	public player: any;

	async detect_body(objDetect, areaDetect) {
		if (
			objDetect.position.x > areaDetect.position.x &&
			objDetect.position.x < areaDetect.position.x + areaDetect.size.width &&
			objDetect.position.y > areaDetect.position.y &&
			objDetect.position.y < areaDetect.position.y + areaDetect.size.height
		) {
			return objDetect;
		} else if (
			objDetect.position.x + objDetect.size.width > areaDetect.position.x &&
			objDetect.position.x + objDetect.size.width <
				areaDetect.position.x + areaDetect.size.width &&
			objDetect.position.y > areaDetect.position.y &&
			objDetect.position.y < areaDetect.position.y + areaDetect.size.height
		) {
			return objDetect;
		} else if (
			objDetect.position.x > areaDetect.position.x &&
			objDetect.position.x < areaDetect.position.x + areaDetect.size.width &&
			objDetect.position.y + objDetect.size.height > areaDetect.position.y &&
			objDetect.position.y + objDetect.size.height <
				areaDetect.position.y + areaDetect.size.height
		) {
			return objDetect;
		} else if (
			objDetect.position.x + objDetect.size.width > areaDetect.position.x &&
			objDetect.position.x + objDetect.size.width <
				areaDetect.position.x + areaDetect.size.width &&
			objDetect.position.y + objDetect.size.height > areaDetect.position.y &&
			objDetect.position.y + objDetect.size.height <
				areaDetect.position.y + areaDetect.size.height
		) {
			return objDetect;
		}
	}
}
