let global={
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}

let kaarten = ['kaart0' ,'kaart1' , 'kaart2' , 'kaart3', 'kaart4', 'kaart5', 'achterkant']
let eersteKaart = null;
let tweedeKaart = null;

let verbergkaartenOpnieuw;

const setup = () => {
    let kaartenDiv = document.getElementById('kaarten')
    for (let rijen = 0; rijen < global.AANTAL_VERTICAAL; rijen++) {
        let rij = document.createElement('div')
        for (let kolommen = 0; kolommen < global.AANTAL_HORIZONTAAL; kolommen++) {
            let image = document.createElement('img')
            image.setAttribute('src', 'images/achterkant.png')
            image.addEventListener('click', kaartGeklikt)
            rij.appendChild(image);
        }
        kaartenDiv.appendChild(rij)
    }
    verdeelKaarten()
}
const verdeelKaarten = () =>{
    let kaartIDs = []
    for (let kaart = 0; kaart < global.AANTAL_KAARTEN; kaart++) {
        kaartIDs.push(kaart)
        kaartIDs.push(kaart)
    }
    console.log(kaartIDs.toString())
    let kaartenImg = document.getElementsByTagName('img')
    for (let i = 0; i < kaartenImg.length; i++) {
        let kaart = Math.floor(Math.random()*kaartIDs.length);
        console.log(kaart);
        kaartenImg[i].setAttribute('kaartID', kaartIDs[kaart])
        kaartIDs.splice(kaart,1);
        console.log(kaartIDs.toString())
    }
}
const kaartGeklikt = (e) =>{
    e.target.setAttribute('src', 'images/kaart' + e.target.getAttribute('kaartID') + '.PNG')
    if(eersteKaart === null){
        eersteKaart = e.target.getAttribute('kaartID')
        console.log(eersteKaart)
    }else if(tweedeKaart === null){
        tweedeKaart = e.target.getAttribute('kaartID')
        console.log(tweedeKaart)
        if(eersteKaart === tweedeKaart){
            console.log('Twee gelijke kaarten')
            eersteKaart = null;
            tweedeKaart = null;
        }
        else{
            verbergkaartenOpnieuw = setInterval(verbergKaarten, 2000)
        }
    }
}
const verbergKaarten = () =>{
    let kaartenImg = document.getElementsByTagName('img')
    for (let i = 0; i < kaartenImg.length; i++) {
        if(kaartenImg[i].getAttribute('kaartID') === eersteKaart || kaartenImg[i].getAttribute('kaartID') === tweedeKaart ){
            kaartenImg[i].setAttribute('src', 'images/achterkant.png')
        }
    }
    eersteKaart = null;
    tweedeKaart = null;
    clearInterval(verbergkaartenOpnieuw)
}
window.addEventListener("load", setup);