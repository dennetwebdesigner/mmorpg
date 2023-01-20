import { Game } from "../canvasSettings.js"

export const mouseScroll = () => {
    window.addEventListener('wheel', (e) => {
        // if (e.deltaY < 0)
        //     Game.camera.scale = 1.5
        // else if (e.deltaY > 0) {
        //     Game.camera.scale = 1
        // }

        // console.log(Game.camera.scale)
    })
}