import { containerTabs, mapTileDiv } from "../elementsHtml.js"
import { mouse } from "../mouse/settings.js"

class TilesImg {
    constructor() {
        this.Tiles = {}

        this.current = {
            name: '',
            size: {},
            image: null,
            position: { x: 0, y: 0 },
            items: {
                x: 0,
                y: 0
            }
        }

        this.containerTabs = containerTabs
        this.containerView = null

    }

    set_current(tileSelected) {
        this.current = {
            name: tileSelected,
            size: {
                width: this.Tiles[tileSelected].width,
                height: this.Tiles[tileSelected].height,
            },
            image: this.Tiles[tileSelected].image,
            position: this.Tiles[tileSelected].position
        }
        this.containerView.innerHTML = ''
        this.current.items = {
            x: tilesImg.current.size.width / 32,
            y: tilesImg.current.size.height / 32
        }

        for (let coll = 0; coll < Math.floor(this.current.size.height / 32); coll++) {
            for (let row = 0; row < Math.floor(this.current.size.width / 32); row++) {
                const button = document.createElement('div')
                button.style.width = '32px'
                button.style.height = '32px'
                    // button.style.border = '1px solid black'
                button.style.backgroundImage = `url("../../editor/imgs/tileset/${this.current.name}")`


                const [x, y] = [
                    (tilesImg.current.size.width - (tilesImg.current.size.width / this.current.items.x)) * row,
                    (tilesImg.current.size.height - (tilesImg.current.size.height / this.current.items.y)) * coll
                ]

                button.style.backgroundPosition = `${x}px ${y}px`
                button.dataset.directional = `${row}_${coll}`


                this.containerView.append(button)
            }
        }
        this.containerView.style.width = 480 + 'px'
        this.containerView.style.height = this.current.size.height + 'px'

    }

    create_view = () => {

        this.containerView = document.createElement('div')
        this.containerView.dataset['viewTile'] = ''
        this.containerView.classList.add('view-tile')

        mapTileDiv.append(this.containerView)
    }

    correction_position() {
        this.current.position = {
            x: mouse.position.x - this.containerView.offsetLeft,
            y: mouse.position.y - this.containerView.offsetTop
        }
    }

    create_img(tileKey) {



        this.Tiles[tileKey]['image'] = new Image()
        this.Tiles[tileKey].image.src = `../../imgs/tileset/${tileKey}`
        this.Tiles[tileKey].image.dataset['mapTile'] = JSON.stringify(this.Tiles[tileKey].position)
    }

    set_position(tileKey) {
        this.Tiles[tileKey]['position'] = {
            x: 0,
            y: 0
        }
    }

    create_tabs() {
        this.create_view()
        Object.keys(this.Tiles).forEach((tileKey, index) => {
            this.set_position(tileKey)
            this.create_img(tileKey)
            const button = document.createElement('button')
            button.dataset['selectTile'] = tileKey
            button.innerHTML = tileKey.replace('.png', '')
            containerTabs.append(button)
        })
    }

    set_tiles(tiles) {
        this.Tiles = {...tiles }
    }


}

export const tilesImg = new TilesImg()