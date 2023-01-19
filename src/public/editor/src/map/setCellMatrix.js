export const matrixVisual = async(coll, row) => {
    const element = document.createElement('div')
    element.classList.add('mapCell')
    element.dataset['coll'] = coll
    element.dataset['row'] = row
    map.append(element)
}