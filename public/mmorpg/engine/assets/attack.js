import {
    Game
} from '../Core/canvasSettings.js';
import {
    showLog
} from '../UI/Methods/LogMessages.js';
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
     * @param {number} time
     */

    /**
     * @param {any} me
     */
    constructor() {
        this.sprite = new Image();
        this.sprite.src = './engine/assets/img/animations/hit_1.png';
        this.time = 0;
        this.fps = 0;
        this.active = false;
        this.size = {
            width: 0,
            height: 0,
        };

        this.position = {
            x: 0,
            y: 0,
        };
    }

    animation(me) {
        this.me = me;

        if (!this.active) {
            return;
        }
        this.fps++;

        this.cutSprite = {
            x: 0,
            y: 0,
        };
        this.time;
        if (this.fps >= 60 / 17) {
            this.time++;
            this.fps = 0;
        }

        if (this.time > 4) {
            this.time = 0;
            this.active = false;
        }

        this.cutSprite.x = this.time * 32;

        // this.position = {
        //     x: position.x,
        //     y: position.y,
        // };

        // this.size = {
        //     width: size.width * Game.camera.scale,
        //     height: size.height * Game.camera.scale,
        // };

        Game.layers.skill.brushTool.drawImage(
            this.sprite,
            this.cutSprite.x,
            this.cutSprite.y,
            32,
            32,
            this.position.x,
            this.position.y,
            32,
            32
        );
    }

    /**
     * @param {{max: number, min: number}} attack
     * @returns {number}
     */
    hit_base(me) {
        this.me = me;
        this.size = {
            width: this.me.size.width * Game.camera.scale,
            height: this.me.size.height * Game.camera.scale,
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

        if (this.target_damage && this.target_damage.id != this.me.id) {
            const take_damage = Math.floor(
                Math.random() *
                (this.me.attributes.attack.max - this.me.attributes.attack.min + 1) +
                this.me.attributes.attack.min
            );

            this.target_damage.attributes.life.current -= take_damage;
            showLog(
                `você infligiu ${take_damage} de dano em ${this.target_damage.name}`
            );
            this.target_damage = null;
        } else {
            console.log('nenhum alvo para atacar!');
        }
    }

    correction_position_area(me) {
        this.me = me;
        if (this.me.direction.last == 'down') {
            this.position.y =
                this.me.position.y + this.me.size.height * Game.camera.scale;
            this.position.x = this.me.position.x;
        }
        if (this.me.direction.last == 'up') {
            this.position.y =
                this.me.position.y - this.me.size.height * Game.camera.scale;
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
        // Game.brushTool.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.size.width,
        //     this.size.height
        // );

        if (player.id != this.me.id) {
            if (
                player.position.x >= this.position.x &&
                player.position.x <= this.position.x + this.size.width &&
                player.position.y >= this.position.y &&
                player.position.y <= this.position.y + this.size.height
            )
                this.target_damage = player;
            else if (
                player.position.x + player.size.width >= this.position.x &&
                player.position.x + player.size.width <=
                this.position.x + this.size.width &&
                player.position.y >= this.position.y &&
                player.position.y <= this.position.y + this.size.height
            )
                this.target_damage = player;
            else if (
                player.position.x >= this.position.x &&
                player.position.x <= this.position.x + this.size.width &&
                player.position.y + player.size.height >= this.position.y &&
                player.position.y + player.size.height <=
                this.position.y + this.size.height
            )
                this.target_damage = player;
            else if (
                player.position.x + player.size.width >= this.position.x &&
                player.position.x + player.size.width <=
                this.position.x + this.size.width &&
                player.position.y + player.size.height >= this.position.y &&
                player.position.y + player.size.height <=
                this.position.y + this.size.height
            )
                this.target_damage = player;
            else this.target_damage = null;
        }
    }
}
