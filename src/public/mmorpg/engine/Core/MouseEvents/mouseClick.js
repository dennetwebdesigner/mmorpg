import { Game } from '../canvasSettings.js'

export const mouseClick = () => {
    window.addEventListener('mousedown', (e) => {
        if (e.target.getAttribute('id') == 'inputSendMessage') {
            console.log('chat message input')
            Game.frameInput = 'external'
        } else {
            console.log('chat message input in')

            Game.frameInput = 'jogo'
        }



        Game.mouse.x = e.clientX - Game.mouse.rect.left
        Game.mouse.y = e.clientY - Game.mouse.rect.top
        if (Game.scene.all_scenes[Game.scene.current].click)
            Game.scene.all_scenes[Game.scene.current].click()
    })

}