import { map, setHeight, setWidth } from './elementsHtml.js'
import { matrix_collision } from './map/settings.js'
import { checkNewUpdate, updateMapAndMatrix } from './map/worldLoopMapEvents.js'
import { closeWindowScript } from './mouse/Events/click/script/closeWindowScript.js'
import { selectTool } from './mouse/Events/click/tools/selectTool.js'
import { worldEventMouseDown } from './mouse/Events/clickDown/worldEvent.js'
import { worldEventMouseUp } from './mouse/Events/clickUp/worldEvent.js'
import { worldEventMouseMove } from './mouse/Events/Move/worldEventMove.js'
import { showScriptText } from './script/show.js'
import { tilesImg } from './Tiles/settings.js'

// script from copy
showScriptText()
closeWindowScript()

// tools
selectTool()

// World Events Mouse
worldEventMouseDown()
worldEventMouseMove()
worldEventMouseUp()

const set_collisions = () => {
    for (let coll = 0; coll < Math.floor(map.clientHeight / 32); coll++) {
        matrix_collision[coll] = []
        for (let row = 0; row < Math.floor(map.clientWidth / 32); row++) {
            matrix_collision[coll][row] = 0
        }
    }
}

// Update State Editor
checkNewUpdate()
updateMapAndMatrix()
set_collisions()

// ===========================================
// eslint-disable-next-line no-undef
const ajax = new XMLHttpRequest()

ajax.addEventListener('load', (data) => {
    const tile = JSON.parse(ajax.response)
    tilesImg.set_tiles(tile)
    tilesImg.create_tabs()
})

ajax.open('get', `${window.location.protocol}//${window.location.host}/editor/assets/all-tiles`)
ajax.send()

setWidth.addEventListener('change', (e) => {
    updateMapAndMatrix()
    set_collisions()
})
setHeight.addEventListener('change', (e) => {
    updateMapAndMatrix()
    set_collisions()
})
