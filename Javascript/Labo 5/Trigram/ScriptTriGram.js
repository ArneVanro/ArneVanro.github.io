const setup = () => {
    maakTrigrammen();
}
const maakTrigrammen = () => {
    let woord = "plezier"
    let length = woord.length
    for (let i = 0; i < length; i++) {
        length--;
        if(length >= 2){
            console.log(woord.substring(i, (i+3)));
        }
    }
}
window.addEventListener("load", setup);