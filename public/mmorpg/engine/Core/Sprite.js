/**
 * @class
 * @constructor
 * @public
 */
export class Sprite {
    /**
     * @type {HTMLImageElement}
     */
    img
    /**
     * 
     * @param {string | null} img 
     */
    constructor(img = null) {
        this.img = new Image()
        this.img.src = img ? img : `/engine/assets/img/Male/character.png`
    }
}
