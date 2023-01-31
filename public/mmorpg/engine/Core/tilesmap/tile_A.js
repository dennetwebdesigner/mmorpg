import {
    Game
} from '../canvasSettings.js';

class Tile_A {
    constructor() {
        this.img = new Image();
        this.ground = new Image();
        this.ground.src = './engine/assets/img/tileset/ground.png';
        this.test = new Image();
        this.test.src = './engine/assets/img/tileset/test.png';
        this.aaa = new Image();
        this.aaa.src = './engine/assets/img/tileset/aaa.png';
    }

    tile(instruction) {
        const [name, x, y] = instruction.split('_');
        const img = name == 'ground.png' ? this.ground : this.test;
        return {
            x,
            y,
            img,
        };
    }
}

export const tile_A = new Tile_A();
