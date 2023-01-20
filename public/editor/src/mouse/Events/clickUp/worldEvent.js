import { mouse } from "../../settings.js";

export const worldEventMouseUp = () => {
    window.addEventListener("mouseup", (e) => {
        mouse.click = false;
    });
}