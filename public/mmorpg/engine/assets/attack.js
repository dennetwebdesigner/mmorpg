import { Game } from '../Core/canvasSettings.js';
import GameListObjectsInGM from './GameListObjects.js';

/**
 * Response attack player
 * @class
 * @constructor
 * @public
 */

export class Attack {
    /**
     * @type {any}
     */
    me;

    /**
     * @param {any} me
     */
    constructor(me) {
        this.me = me;
    }

    /**
     * @param {{max: number, min: number}} attack
     * @returns {number}
     */
    hit_base({ max, min }) {
        this.size = {
            width: this.me.size.width * 1.7,
            height: this.me.size.height * 1.7,
        };

        this.position = {
            x: this.me.position.x,
            y: this.me.position.y,
        };

        this.correction_position_area();

        Object.keys(GameListObjectsInGM).forEach((key) => {
            const players = GameListObjectsInGM[key];
            this.isInside(players);
        });

        return Math.floor(Math.random() * (max - min) + min);
    }

    correction_position_area() {
        if (this.me.direction.last == 'down') {
            this.position.y = this.me.position.y + this.me.size.height * 1.7;
            this.position.x = this.me.position.x;
        }
        if (this.me.direction.last == 'up') {
            this.position.y = this.me.position.y - this.me.size.height * 1.7;
            this.position.x = this.me.position.x;
        }
        if (this.me.direction.last == 'left') {
            this.position.x = this.position.x - this.size.width;
            this.position.y = this.me.position.y;
        }
        if (this.me.direction.last == 'right') {
            this.position.x = this.position.x + this.size.width;
            this.position.y = this.me.position.y;
        }
    }

    isInside(player) {
        Game.brushTool.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );

        if (player.id != this.me.id) {
            if (
                player.position.x >= this.position.x &&
                player.position.x <= this.position.x + this.size.width &&
                player.position.y >= this.position.y &&
                player.position.y <= this.position.y + this.size.height
            )
                console.log('detect top_left');
            else if (
                player.position.x + player.size.width >= this.position.x &&
                player.position.x + player.size.width <=
                this.position.x + this.size.width &&
                player.position.y >= this.position.y &&
                player.position.y <= this.position.y + this.size.height
            )
                console.log('detect top_rigjt');
            else if (
                player.position.x >= this.position.x &&
                player.position.x <= this.position.x + this.size.width &&
                player.position.y + player.size.height >= this.position.y &&
                player.position.y + player.size.height <=
                this.position.y + this.size.height
            )
                console.log('detect bottom+_+left');
            else if (
                player.position.x + player.size.width >= this.position.x &&
                player.position.x + player.size.width <=
                this.position.x + this.size.width &&
                player.position.y + player.size.height >= this.position.y &&
                player.position.y + player.size.height <=
                this.position.y + this.size.height
            )
                console.log('detect bottom_right');
        }
    }
}
