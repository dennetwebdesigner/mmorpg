import { showScript } from "../elementsHtml.js"
import { setScript } from "../elementsHtml.js"

export const showScriptText = () => {
    showScript.addEventListener('click', () => {
        setScript.style.display = window.getComputedStyle(setScript).display == 'none' ? 'block' : 'none'
    })
}