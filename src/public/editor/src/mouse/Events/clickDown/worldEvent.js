import { mouse } from "../../settings.js";
import { drawInMap } from "../../../map/drawmap.js";

export const worldEventMouseDown = () => {
    window.addEventListener("mousedown", (e) => {
        mouse.click = true;
        drawInMap(e.target)
    });
}