const setup = () => {
    console.log('hello')
    changeTekst()
}
const changeTekst = () =>{
    let pElem = document.querySelectorAll('p')[0];
    let newText = document.createTextNode('Good Job');

    pElem.firstChild.remove()
    pElem.append(newText)
}
window.addEventListener("load", setup);