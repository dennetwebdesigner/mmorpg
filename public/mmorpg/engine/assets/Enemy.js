import { NodeItem, Input } from './index.js'


class Enemy {
    constructor() {
        this.style = { color: 'red' }


        this.position = { x: 0, y: 0 }

        this.input = new Input()

        this.size = {
            width: 32,
            height: 32
        }

        this.speed = 0.2

        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    start() {

    }

    update() {
        this.velocity.x = this.speed
        this.position.x += this.velocity.x
        NodeItem({
            position: this.position,
            size: this.size,
            style: this.style
        })
    }
}

export const enemy = new Enemy()