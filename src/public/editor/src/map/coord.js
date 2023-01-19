import { mapSettings } from "./settings.js"
import { setWidth, setHeight } from "../elementsHtml.js"
export const mapCoord = async() => {
    if (mapSettings.size.width != setWidth.value) mapSettings.size.width = setWidth.value
    if (mapSettings.size.height != setHeight.value) mapSettings.size.height = setHeight.value
}