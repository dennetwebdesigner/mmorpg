import GameListObjectsInGM from "../assets/GameListObjects.js";
import { Game } from "./canvasSettings.js";
export class Camera {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        };
        this.scale = 1.7;
    }

    current(id) {
        this.player = GameListObjectsInGM[id];
        if (this.player) {
            if (Game.scene.current != "login") {
                this.position.x = -this.player.position.x * this.scale + Game.display.size.width / 2;
                this.position.y = -this.player.position.y * this.scale + Game.display.size.height / 2;
            }
        }
    }

    delimiters(id) {
        this.player = GameListObjectsInGM[id];
        if (this.player) {
            if (
                this.player.position.x - Game.display.size.width / 2 / this.scale <
                0
            ) {
                this.position.x = 0;
            } else if (
                (this.position.x - Game.display.size.width / 2 - 32) * -1 >=
                Game.scene.all_scenes[Game.scene.current].map.size.x
            ) {
                this.position.x =
                    (Game.scene.all_scenes[Game.scene.current].map.size.x * this.scale -
                        Game.display.size.width) *
                    -1;
            }

            if (
                this.player.position.y - Game.display.size.height / 2 / this.scale <
                0
            ) {
                this.position.y = 0;
            } else if (
                Game.scene.all_scenes[Game.scene.current].map.size.y -
                Game.display.size.height / 2 <=
                this.player.position.y - 60
            ) {
                this.position.y =
                    (Game.scene.all_scenes[Game.scene.current].map.size.y * this.scale -
                        60 -
                        Game.display.size.height) *
                    -1;
            }

        }
    }
}