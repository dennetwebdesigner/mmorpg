import { sendServer } from '../../utils/connection.js';
import UI from '../UI/UIObjectsList.js';
import { Game } from './canvasSettings.js';
import { Keyboard } from './keyboard.js';

class Input {
    constructor(connection) {
        this.moviment = { x: 'idle', y: 'idle' };
        this.pressed_down();
        this.connection = connection;
    }

    pressed_down(node_item, value) {
        window.addEventListener('keydown', (e) => {
            if (Game.scene.current != 'login') {
                this.key_pressed('Enter', e.key, 'Enter');
                this.key_pressed('up', e.key, 'up');
                this.key_pressed('down', e.key, 'down');
                this.key_pressed('left', e.key, 'left');
                this.key_pressed('right', e.key, 'right');
            }
        });

        window.addEventListener('keyup', (e) => {
            if (Game.scene.current != 'login') {
                this.key_pressed('up', e.key, 'idle');
                this.key_pressed('down', e.key, 'idle');
                this.key_pressed('left', e.key, 'idle');
                this.key_pressed('right', e.key, 'idle');
            }
        });
    }

    key_pressed(action_key, input, value) {
        switch (action_key) {
            case 'up':
                Keyboard.up.forEach((key) => {
                    if (input == key && Game.frameInput == 'jogo') {
                        this.moviment.y = value;
                        sendServer(this.connection, '_moviment_player', {
                            id: this.connection.id,
                            moviment: { x: 'idle', y: 'idle' },
                        });
                    }
                });
                break;

            case 'down':
                Keyboard.down.forEach((key) => {
                    if (input == key && Game.frameInput == 'jogo') {
                        this.moviment.y = value;
                        sendServer(this.connection, '_walk_stop', {
                            id: this.connection.id,
                            walk: false,
                        });
                    }
                });
                break;

            case 'right':
                Keyboard.right.forEach((key) => {
                    if (input == key && Game.frameInput == 'jogo') {
                        this.moviment.x = value;
                        sendServer(this.connection, '_walk_stop', {
                            id: this.connection.id,
                            walk: false,
                        });
                    }
                });
                break;

            case 'left':
                Keyboard.left.forEach((key) => {
                    if (input == key && Game.frameInput == 'jogo') {
                        this.moviment.x = value;
                        sendServer(this.connection, '_walk_stop', {
                            id: this.connection.id,
                            walk: false,
                        });
                    }
                });
                break;
            case 'Enter':
                Keyboard.chat.forEach((key) => {
                    if (input == key) {
                        if (
                            Game.frameInput == 'jogo' &&
                            !UI.Inputs.sendMessageInput.value
                        ) {
                            Game.frameInput = 'external';
                            UI.Inputs.sendMessageInput.focus();
                        } else if (
                            Game.frameInput == 'external' &&
                            !UI.Inputs.sendMessageInput.value
                        ) {
                            Game.frameInput = 'jogo';
                            UI.Inputs.sendMessageInput.blur();
                        }
                    }
                });
                break;

            default:
                break;
        }
    }
}

export { Input };