import { mouseClick } from "./mouseClick.js";
import { mouseMoviment } from "./MouseMoviment.js";
import { mouseScroll } from "./mouseScroll.js";

class MouseEvents {
    setEvents() {
        mouseClick()
        mouseMoviment()
        mouseScroll()
    }
}

export const mouseEvents = new MouseEvents()