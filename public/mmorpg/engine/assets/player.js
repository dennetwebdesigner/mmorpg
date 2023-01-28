import { Attack } from './attack.js';
import { NodeItem, Input } from './index.js';
import { draw_tag_name } from './Player/DisplayTagNames.js';
import { Game } from '../Core/canvasSettings.js';
import GameListObjectsInGM from './GameListObjects.js';

export default class Player {
    constructor(settings) {
        Object.assign(this, settings);
        this.type = 'player';
        this.fps = 0;
        this.timeAnimation = 1;
        this.spriteCutPosition = { x: 0, y: 0 };
        this.attack = new Attack(this);
        console.log(this.attributes);
    }

    update(connection) {
        this.fps++;
        this.time();
        NodeItem(this);
        draw_tag_name(this.id);

        if (this.attributes.life.current <= 0) {
            this.attributes.life.current = 0;
        }

        this.show_attributes(connection);
    }

    show_attributes(connection) {
        if (connection.id == this.id) {
            // life bar
            const width =
                (this.attributes.life.current * 100) / this.attributes.life.max;
            this.box_bar(Game.layers.UI.brushTool, { color: 'black' });
            this.bar(Game.layers.UI.brushTool, {
                color: 'red',
                size: { width, height: 10 },
            });
            //Habilites bar
            this.box_bar(Game.layers.UI.brushTool, {
                position: { x: 10, y: 25 },
                color: 'black',
            });
            this.bar(Game.layers.UI.brushTool, {
                color: 'blue',
                position: { x: 10, y: 25 },
            });
        } else {
            Object.keys(GameListObjectsInGM).forEach((key) => {
                if (key == this.id) {
                    const player = GameListObjectsInGM[key];
                    const forCent =
                        (this.attributes.life.current * 100) / this.attributes.life.max;
                    const widthPx = (forCent * 32) / 100;
                    const size = { width: 32, height: 3 };
                    const position = {
                        x: player.position.x,
                        y: player.position.y - 13,
                    };
                    this.box_bar(Game.layers.sky.brushTool, { size, position });
                    this.bar(Game.layers.sky.brushTool, {
                        color: 'yellow',
                        size: {...size, width: widthPx },
                        position,
                    });
                }
            });
        }
    }

    box_bar(brushTool, settings = null) {
        const position =
            settings && settings.position ? settings.position : { x: 10, y: 10 };
        const size =
            settings && settings.size ? settings.size : { width: 100, height: 10 };
        const color = settings && settings.color ? settings.color : 'black';

        brushTool.beginPath();
        brushTool.fillStyle = 'black';
        brushTool.fillRect(position.x, position.y, size.width, size.height);
        brushTool.strokeStyle = color;
        brushTool.lineWidth = 2;
        brushTool.stroke();
        brushTool.closePath();
    }

    bar(brushTool, settings = null) {
        const position = !settings.position ? { x: 10, y: 10 } : settings.position;
        const size = !settings.size ? { width: 100, height: 10 } : settings.size;
        const color = !settings.color ? 'black' : settings.color;

        brushTool.beginPath();
        brushTool.fillStyle = color;
        brushTool.fillRect(position.x, position.y, size.width, size.height);
        brushTool.closePath();
    }

    time() {
        if (this.direction.last == 'down') this.spriteCutPosition.y = 0;

        if (this.direction.last == 'left') this.spriteCutPosition.y = 1;
        if (this.direction.last == 'right') this.spriteCutPosition.y = 2;
        if (this.direction.last == 'up') {
            this.spriteCutPosition.y = 3;
        }

        if (this.fps >= 60 / 6) {
            if (!this.direction.walk) {
                this.spriteCutPosition.x = 1;
                return;
            } else {
                this.fps = 0;
                this.timeAnimation++;
                if (this.timeAnimation == 3) {
                    this.spriteCutPosition.x = 1;
                    return;
                } else if (this.timeAnimation == 4) {
                    this.timeAnimation = 0;
                }
                this.spriteCutPosition.x = this.timeAnimation;
            }
        }
    }

    click(connection) {
        connection.emit('skill/hit_base', { id: this.id });
    }
}
