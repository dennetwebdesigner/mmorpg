import { setAudio } from '../../Core/Audio/createAudio.js'
import UI from '../UIObjectsList.js'
export const showLog = (text) => {

    const li = document.createElement('li')
    li.innerHTML = text
    const liHeight = li.clientHeight
    UI.Objects.log.append(li)
    UI.Objects.log.scrollTop += UI.Objects.log.scrollHeight
    setAudio({ remove: true })
}

export const clearLog = () => {
    UI.Objects.log.innerHTML = `<li>Todos os Logs do jogo ficaram aqui</li>`
}

export const disabledShowLog = () => {
    UI.Objects.log.style.display = 'none'
    UI.Inputs.sendMessage.style.display = 'none'
    clearLog()
}


export const enabledShowLog = () => {
    clearLog()
    UI.Objects.log.style.display = 'block'
    UI.Inputs.sendMessage.style.display = 'block'
}

disabledShowLog()