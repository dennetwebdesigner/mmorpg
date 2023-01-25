import { Camera } from './camera.js';

/**
 * @class
 * @constructor
 * @public
 */

class Core {
    /**
     * @type {CanvasRenderingContext2D}
     * @public
     */
    brushTool;

    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.frameInput = 'jogo';

        this.display = {
            box: 32,
            zoom: 2,
            size: {
                width: 768,
                height: 448,
            },
            position: {
                x: 0,
                y: 0,
            },
        };

        this.display['scale'] = {
            x: this.display.size.width,
            Y: this.display.size.width,
        };

        this.brushTool = canvas.getContext('2d');

        this.mouse = {
            x: 0,
            y: 0,
        };

        this.camera = new Camera();

        this.scene = {
            current: 'login',
            all_scenes: {},
        };
    }

    setDefault() {
        // Config Canvas Draw Size
        this.canvas.width = this.display.size.width;
        this.canvas.height = this.display.size.height;
        this.canvas.style.width = `${1180}px`;
        this.canvas.style.height = `${this.display.scale.y}px`;
        this.mouse['rect'] = this.canvas.getBoundingClientRect();
    }
}

export const Game = new Core(document.querySelector('canvas'));
Game.setDefault();