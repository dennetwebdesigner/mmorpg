import { matrix } from "./settings.js";
import { map } from "../elementsHtml.js";
import { mapSettings } from "./settings.js";
import { matrixVisual } from "./setCellMatrix.js";
export const setMapMatrix = async() => {
    map.innerHTML = ''
    if (matrix.length <= 0 || mapSettings.size.width != map.clientWidth || mapSettings.size.height != map.clientHeight) {
        let height = 0
        let width = 0
        for (let colls = 0; colls < Math.floor(map.clientHeight / 32); colls++) {
            matrix[colls] = !matrix[colls] ? [] : matrix[colls];
            height += 32
            for (let rows = 0; rows < Math.floor(map.clientWidth / 32); rows++) {
                await matrixVisual(colls, rows)
                matrix[colls][rows] = !matrix[colls][rows] ? null : matrix[colls][rows];
                if (rows < 1) width += 32

            }
        }
        console.log(height, width)
    }
};