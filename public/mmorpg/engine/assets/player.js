import { Attack } from './attack.js';
import { NodeItem, Input } from './index.js';
import { draw_tag_name } from './Player/DisplayTagNames.js';
import { Game } from '../Core/canvasSettings.js';

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
        if (connection.id == this.id) this.show_attributes();
    }

    show_attributes() {
        // life
        const width =
            (this.attributes.life.current * 100) / this.attributes.life.max;
        this.bar({ color: 'red', size: { width, height: 10 } });
        this.bar({ color: 'blue', position: { x: 10, y: 25 } });
    }

    box_bar(position) {
        Game.layers.UI.brushTool.beginPath();
        Game.layers.UI.brushTool.rect(position.x, position.y, 100, 10);
        Game.layers.UI.brushTool.strokeStyle = 'black';
        Game.layers.UI.brushTool.lineWidth = 2;
        Game.layers.UI.brushTool.stroke();
        Game.layers.UI.brushTool.fill();
    }

    bar(settings = null) {
        const position = !settings.position ? { x: 10, y: 10 } : settings.position;
        const size = !settings.size ? { width: 100, height: 10 } : settings.size;
        const color = !settings.color ? 'black' : settings.color;

        this.box_bar(position);
        Game.layers.UI.brushTool.beginPath();
        Game.layers.UI.brushTool.fillStyle = color;
        Game.layers.UI.brushTool.rect(
            position.x,
            position.y,
            size.width,
            size.height
        );
        Game.layers.UI.brushTool.fill();
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
