const setup = () => {
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].setAttribute('class', 'listitem');
        li[i].setAttribute('style', 'color: red');
    }
    let img = document.createElement('img');
    img.setAttribute('src', 'Opdracht2IMG.png');
    img.setAttribute('style', 'width: 10%')
    li[2].appendChild(img);
}
window.addEventListener("load", setup);