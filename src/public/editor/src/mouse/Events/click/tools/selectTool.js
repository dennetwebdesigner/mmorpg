import { tilesImg } from "../../../../Tiles/settings.js";
import { sideLeft } from "../../../../elementsHtml.js";
import { updateMapAndMatrix } from "../../../../map/worldLoopMapEvents.js";
import { handle_select_brush_tile } from "../../../../tools/events/selectBrushTile.js";
import { tools_select } from "../../../../tools/events/toolsSelect.js";

const all_tools_events = [
    tools_select,
    handle_select_brush_tile
]



export const selectTool = () => {
    sideLeft.addEventListener("click", (e) => {

        all_tools_events.forEach(tool_dispatch => {
            tool_dispatch(e)
        })
        if (e.target.dataset["selectTile"]) {
            tilesImg.set_current(e.target.dataset["selectTile"]);
        }

        if (e.target.dataset["size"]) {
            updateMapAndMatrix()
        }

    });
};