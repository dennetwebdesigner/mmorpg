/**
 * class Status of the character
 * @class
 * @constructor
 * @public
 */

class Status {
    /** 
     * life of the character
     * @type {{max: number , current: number, zero: number}} 
     * @public
     */
    life

    /** 
     * life of the character
     * @type {{max: number , min: number}} 
     * @public
     */
    attack

    /** 
     * set manually life, attack
     * @param {object} attributes
     * @param {{max: number | undefined, current: number | undefined}} attributes.life
     * @param {{min: number | undefined , max: number | undefined}} attributes.attack
     */
    constructor({ life, attack }) {
        this.life.max = life.max ? life.max : 200;
        this.life.current = life.current ? life.current : this.life.max
        this.life.zero = 0
        this.attack.max = attack.max ? attack.max : 200;
        this.attack.min = attack.min ? attack.min : this.attack.max
    }
}