import { Socket } from 'socket.io';

import BaseHit from '../../Players/Skills/BaseHit';
import { Status } from './Status';

export interface PlayerDTO {
	position?: { x: number; y: number };
	size?: { width: number; height: number };
	style?: { color: string };
	name: string;
	id?: string;
	attributes?: Status;
	sprite?: string;
	direction?: {
		last: string;
		walk: boolean;
	};
	connection?: Socket | null;
}
