import { Attack } from './attack.js';
import { NodeItem, Input } from './index.js';
import { draw_tag_name } from './Player/DisplayTagNames.js';

export default class Player {
    constructor(settings) {
        Object.assign(this, settings);
        this.fps = 0;
        this.timeAnimation = 1;
        this.spriteCutPosition = { x: 0, y: 0 };
        this.attack = new Attack(this);
    }

    update() {
        this.fps++;
        this.time();
        NodeItem(this);
        draw_tag_name(this.id);
        this.attack.hit_base(this.attributes.attack);
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
}
