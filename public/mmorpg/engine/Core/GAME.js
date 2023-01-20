import { LoginScene } from '../assets/Scenes/LoginScene.js'
import { Phase001Scene } from '../assets/Scenes/Phase001Scene.js'
import UI from '../UI/UIObjectsList.js'
import { setAudio } from './Audio/createAudio.js'
import { Game } from './canvasSettings.js'
import { mouseEvents } from './MouseEvents/mouseEvents.js'

export class Game_start {
    constructor(connection) {
        this.connection = connection
    }

    start() {
        const scene001 = new Phase001Scene(this.connection)
        const sceneLogin = new LoginScene(this.connection)
        Game.scene.all_scenes[scene001.name] = scene001
        Game.scene.all_scenes[sceneLogin.name] = sceneLogin



    }

    init() {
        this.start()
        this.loop()
        mouseEvents.setEvents()
    }

    update() {


        if (Game.scene.all_scenes[Game.scene.current].start && !Game.scene.all_scenes[Game.scene.current].ready) {
            Game.scene.all_scenes[Game.scene.current].start()
            Game.scene.all_scenes[Game.scene.current].ready = true
        }

        Game.scene.all_scenes[Game.scene.current].update()
        if (Game.frameInput == 'jogo' && window.getComputedStyle(UI.Inputs.sendMessage).display != 'none') {
            UI.Inputs.sendMessage.style.display = 'none'
            UI.Inputs.sendMessageInput.blur()
        } else if (Game.frameInput == 'external' && window.getComputedStyle(UI.Inputs.sendMessage).display != 'block') {
            UI.Inputs.sendMessage.style.display = 'block'
            UI.Inputs.sendMessageInput.focus()
        }
    }

    loop() {
        Game.brushTool.clearRect(0, 0, Game.display.size.width, Game.display.size.height)

        Game.camera.current(this.connection.id)
        Game.camera.delimiters(this.connection.id)


        Game.brushTool.save();
        Game.brushTool.translate(Game.camera.position.x, Game.camera.position.y)
        Game.brushTool.scale(Game.camera.scale, Game.camera.scale)

        this.update(this.connection)

        Game.brushTool.restore();

        setTimeout(() => {
            requestAnimationFrame(() => {
                this.loop()
            })
        }, 1000 / 120);
    }
}