import { mapCoord } from "./coord.js";
import {
    mapSettings,
    matrix,
    drawmatrix
} from "./settings.js";
import { setHeight, setWidth, matrixScript } from "../elementsHtml.js";
import { setMapMatrix } from "./setInMap.js";

export const checkNewUpdate = () => {

};

export const updateMapAndMatrix = async() => {
    // setInterval(async() => {
    await mapCoord();
    await setMapMatrix(mapSettings.size.width, mapSettings.size.height);
    await watchMatrixChange()
    await new Promise((resolve) => resolve(drawmatrix.value = matrix))
    await setSizeMap()
        // }, 500);
};

const setSizeMap = async() => {
    map.style.width = setWidth.value ? setWidth.value + "px" : 768 + "px";
    map.style.height = setHeight.value ? setHeight.value + "px" : 768 + "px";
}

const watchMatrixChange = async() => {
    console.log(JSON.stringify(matrix) != JSON.stringify(drawmatrix.value))
    if (JSON.stringify(matrix) != JSON.stringify(drawmatrix.value)) {
        matrixScript.innerHTML = JSON.stringify(matrix);
    }
}