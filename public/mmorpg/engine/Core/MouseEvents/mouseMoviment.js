import { Game } from "../canvasSettings.js"

export const mouseMoviment = () => {
    window.addEventListener('mousemove', (e) => {
        Game.mouse.x = e.clientX - Game.mouse.rect.left
        Game.mouse.y = e.clientY - Game.mouse.rect.top
        if (Game.scene.all_scenes[Game.scene.current].mouseOver)
            Game.scene.all_scenes[Game.scene.current].mouseOver()
    })
}