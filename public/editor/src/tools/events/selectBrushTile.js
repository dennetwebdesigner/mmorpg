import { tools } from "../settings.js";

export const handle_select_brush_tile = (elementHtml) => {
    if (elementHtml.target.dataset.directional) {
        if (
            tools.directionals.data &&
            tools.directionals.element &&
            tools.directionals.data != elementHtml.target.dataset.directional
        ) {
            tools[tools.directionals.data] = false;
            tools.directionals.element.style.backgroundColor = "rgb(240, 240, 240)";
            tools.directionals.element.style.opacity = "1";
        }

        elementHtml.target.style.backgroundColor =
            window.getComputedStyle(elementHtml.target).backgroundColor == "rgb(255, 165, 0)" ?
            "rgb(240, 240, 240)" :
            "rgb(255, 165, 0)";
        elementHtml.target.style.opacity =
            window.getComputedStyle(elementHtml.target).opacity == "0.5" ? "1" : "0.5";
        tools.directionals.element = elementHtml.target;
        tools.directionals.data = elementHtml.target.dataset.directional;
    }
}