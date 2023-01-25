import { setAudio } from "../../Core/Audio/createAudio.js";
import { Game } from "../../Core/canvasSettings.js";
import { Input } from "../../Core/Inputs.js";
import { tile_A } from "../../Core/tilesmap/tile_A.js";
import NodeObjectList from "../GameListObjects.js";

export class Phase001Scene {
    constructor(connection) {
        this.name = "phase001";
        this.connection = connection;
        this.input = new Input(this.connection);
        this.ready = false

        this.map = {
            overlay: {
                ground: [],
                sky: [],
                model: [],
            },
            size: {
                origin: {
                    x: 0,
                    y: 0,
                },
                x: 500,
                y: 500,
            },
        };
        this.coordMap();
    }

    start() {
        setAudio({ src: './engine/assets/sounds/sound001.mp3' })
    }

    update() {
        this.drawMap();

        Object.keys(NodeObjectList).forEach((node_item) => {
            const player = NodeObjectList[node_item];
            player.update();
        });

        if (this.input.moviment.x != "idle" || this.input.moviment.y != "idle") {
            const moviment = this.input.moviment;
            NodeObjectList[this.connection.id].walk = true;

            if (moviment.x != "idle")
                NodeObjectList[this.connection.id].lastMoviment = moviment.x;
            else NodeObjectList[this.connection.id].lastMoviment = moviment.y;
            this.connection.emit("_moviment_player", {
                id: this.connection.id,
                moviment,
            });
        }
    }

    drawMap() {
        this.drawTile(this.map.overlay.ground);
    }

    drawTile(matrix) {
        for (let icoll = 0; icoll < matrix.length; icoll++) {
            const cols = matrix[icoll];
            matrix[icoll].forEach((tile, irow) => {
                if (tile) {
                    const cut = tile_A.tile(tile);
                    this.tileMap("", { x: irow, y: icoll }, cut);
                }
            });
        }
    }

    tileMap(name, position, cut) {
        Game.brushTool.drawImage(
            cut.img,
            cut.x * Game.display.box,
            cut.y * Game.display.box,
            Game.display.box,
            Game.display.box,
            position.x * Game.display.box,
            position.y * Game.display.box,
            Game.display.box,
            Game.display.box
        );
    }

    coordMap() {
        this.map.overlay.ground = [
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"],
            ["ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2", "ground.png_11_2"]
        ]
    }
}
