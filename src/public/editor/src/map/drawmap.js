import { tools } from "../tools/settings.js";
import { mouse } from "../mouse/settings.js";
import { matrixScript, matrixScriptCollision } from "../elementsHtml.js";
import { mapSettings, matrix_collision } from "./settings.js";
import { matrix } from "./settings.js";
import { drawCell } from "./drawCell.js";
import { tilesImg } from "../Tiles/settings.js";

export const drawInMap = (element) => {
    if (
        tools.brush &&
        mouse.click &&
        element.dataset["coll"] &&
        element.dataset["row"]
    ) {
        const row = element.dataset["row"];
        const coll = element.dataset["coll"];
        matrix[coll][row] = tilesImg.current.name + "_" + tools.directionals.data;

        mapSettings.coord.current = element;
        matrixScript.innerHTML = JSON.stringify(matrix);
        drawCell();
    }

    if (
        tools.collision &&
        mouse.click &&
        element.dataset["coll"] &&
        element.dataset["row"]
    ) {

        const row = element.dataset["row"];
        const coll = element.dataset["coll"];
        matrix_collision[coll][row] = matrix_collision[coll][row] == 1 ? 0 : 1;
        matrixScriptCollision.innerHTML = '<br><br>'
        matrixScriptCollision.innerHTML += JSON.stringify(matrix_collision)
    }
};