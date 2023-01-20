import { drawInMap } from '../../../map/drawmap.js'
import { map } from '../../../elementsHtml.js';
import { mouse } from '../../settings.js';
import { tools } from '../../../tools/settings.js';

export const worldEventMouseMove = () => {
    window.addEventListener("mousemove", (e) => {
        drawInMap(e.target)
        const textLeft = window.getComputedStyle(map).marginLeft;
        const textTop = window.getComputedStyle(map).marginTop;
        if (mouse.click && tools.move && mouse.position.x > e.clientX) {
            map.style.marginLeft = parseFloat(textLeft.split("px")[0]) - 5 + "px";
        } else if (mouse.click && tools.move && mouse.position.x < e.clientX) {
            map.style.marginLeft = parseFloat(textLeft.split("px")[0]) + 5 + "px";
        }

        if (mouse.click && tools.move && mouse.position.y > e.clientY) {
            map.style.marginTop = parseFloat(textTop.split("px")[0]) - 5 + "px";
        } else if (mouse.click && tools.move && mouse.position.y < e.clientY) {
            map.style.marginTop = parseFloat(textTop.split("px")[0]) + 5 + "px";
        }

        mouse.position.x = e.clientX;
        mouse.position.y = e.clientY;

    });
}