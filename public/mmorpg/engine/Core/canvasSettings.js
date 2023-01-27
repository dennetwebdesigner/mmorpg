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
     * @property {Object} layers
     * @property {object} layers.player
     * @property {HTMLCanvasElement} layers.player.canvas
     * @property {CanvasRenderingContext2D} layers.player.brushTool
     * @property {object} layers.sky
		 * * @property {HTMLCanvasElement} layers.sky.canvas
     * @property {CanvasRenderingContext2D} layers.sky.brushTool
     * @property {object} layers.UI
		 * * @property {HTMLCanvasElement} layers.UI.canvas
     * @property {CanvasRenderingContext2D} layers.UI.brushTool
    
     */

    /**
     * @param {HTMLCanvasElement} canvas
     * @param {HTMLCanvasElement} layerPlayer
     * @param {HTMLCanvasElement} layerSky
     * @param {HTMLCanvasElement} layerUI
     */
    constructor(canvas, layerPlayer, layerSky, layerUI) {
        this.canvas = canvas;

        this.layers = {
            player: {
                canvas: layerPlayer,
                brushTool: null,
            },
            sky: {
                canvas: layerSky,
                brushTool: null,
            },
            UI: {
                canvas: layerUI,
                brushTool: null,
            },
        };

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
        this.layers.player.brushTool = this.layers.player.canvas.getContext('2d');
        this.layers.sky.brushTool = this.layers.sky.canvas.getContext('2d');
        this.layers.UI.brushTool = this.layers.UI.canvas.getContext('2d');

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

        Object.keys(this.layers).forEach((layer) => {
            this.layers[layer].canvas.width = this.display.size.width;
            this.layers[layer].canvas.height = this.display.size.height;
            this.layers[layer].canvas.style.width = `${1180}px`;
            this.layers[layer].canvas.style.height = `${this.display.scale.y}px`;
        });

        this.mouse['rect'] = this.canvas.getBoundingClientRect();
    }
}

export const Game = new Core(
    document.querySelector('canvas'),
    document.querySelector('#layer_player'),
    document.querySelector('#layer_sky'),
    document.querySelector('#layer_UI')
);
Game.setDefault();
