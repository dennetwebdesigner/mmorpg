import { tools } from "../settings.js";

export const tools_select = (elementHTML) => {
    if (elementHTML.target.dataset.tools) {
        if (
            tools.last.data &&
            tools.last.element &&
            tools.last.data != elementHTML.target.dataset.tools
        ) {
            tools[tools.last.data] = false;
            tools.last.element.style.backgroundColor = "transparent";
        }
        tools[elementHTML.target.dataset.tools] = !tools[elementHTML.target.dataset.tools] ?
            true :
            false;
        elementHTML.target.style.backgroundColor = !tools[elementHTML.target.dataset.tools] ?
            "transparent" :
            "orange";

        tools.last.element = elementHTML.target;
        tools.last.data = elementHTML.target.dataset.tools;
    }


}