const setup = () => {
    let a = document.getElementsByClassName('Belangrijk');
    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('opvallend');
    }
}

window.addEventListener("load", setup);