import { tilesImg } from "../Tiles/settings.js";
import { tools } from "../tools/settings.js";
import { mapSettings } from "./settings.js";

export const drawCell = () => {
    if (mapSettings.coord.current) {
        const element = mapSettings.coord.current;
        // element.style.backgroundColor = "red";
        const [x, y] = tools.directionals.data.split("_");
        element.style.backgroundImage = `url("../../editor/imgs/tileset/${tilesImg.current.name}")`;
        element.style.backgroundPosition = `${
      (tilesImg.current.size.width - tilesImg.current.size.width / tilesImg.current.items.x) * x
    }px ${
      (tilesImg.current.size.height - tilesImg.current.size.height / tilesImg.current.items.y) * y
    }px`;
    }
};