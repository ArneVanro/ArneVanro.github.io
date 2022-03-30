const setup = () => {
    let body = document.getElementsByTagName('body')[0]
    let button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'voeg P toe')
    body.appendChild(button)

    button.addEventListener('click', voegPtoe);
}
const voegPtoe = () => {
    let newP = document.createElement('p')
    let textP = document.createTextNode('Dit is een p element.')
    newP.append(textP)

    let div = document.getElementsByTagName('div')[0]
    div.appendChild(newP)
}
window.addEventListener("load", setup);