import { setScript } from "../../../../elementsHtml.js"
import { hidenScript } from "../../../../elementsHtml.js"
// Mouse Events
export const closeWindowScript = () => {
    hidenScript.addEventListener('click', () => {
        setScript.style.display = 'none'
    })
}