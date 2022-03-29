const setup = () => {
    maakTrigrammen();
}
const maakTrigrammen = () => {
    let woord = "plezier"
    let length = woord.length
    let lengthLeft = length
    for (let i = 0; i < length; i++) {
        if(lengthLeft >= 3){
            console.log(woord.substring(i, (i+3)));
            lengthLeft--
        }
    }
}
window.addEventListener("load", setup);