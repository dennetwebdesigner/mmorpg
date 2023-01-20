export const setAudio = (settings = null) => {
    const audio = document.createElement('audio')
    audio.style.position = 'absolute'
    audio.style.top = 0
    const source = document.createElement('source')
    source.src = settings.src ? settings.src : './engine/assets/sounds/notify.mp3'
    audio.volume = 0.30
    audio.append(source)
    document.body.append(audio)
    audio.muted = false
    audio.play()

    if (settings.remove)
        setTimeout(() => {
            audio.remove()
        }, 2000)

}