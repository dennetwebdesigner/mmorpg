import { mouseClick } from './mouseClick.js';
import { mouseMoviment } from './mouseMoviment.js';
import { mouseScroll } from './mouseScroll.js';

class MouseEvents {
    setEvents(connection) {
        mouseClick(connection);
        mouseMoviment();
        mouseScroll();
    }
}

export const mouseEvents = new MouseEvents();
