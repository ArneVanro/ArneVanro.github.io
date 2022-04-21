let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

let verplaatsImageInt;

const setup = () => {
    let startKnop = document.getElementsByTagName("input")[0];
    startKnop.addEventListener('click', startGame);
};

const startGame = () =>{
    console.log('Start game')

    verplaatsImageInt = setInterval(changePos, 2500);

    let target = document.getElementsByTagName("img")[0];
    target.addEventListener('click', geklikt);
}

const geklikt = () =>{
    let target = document.getElementsByTagName("img")[0];
    target.addEventListener('click', geklikt);
    if(target.getAttribute('isBom') === '1'){
        alert("Game Over")
        clearInterval(verplaatsImageInt);
    } else {
        changePos()
    }
}

const changePos = () =>{
    let target = document.getElementsByTagName("img")[0];

    target.style.marginLeft = (Math.random()*552).toString() + 'px';
    target.style.marginTop = (Math.random()*752).toString() + 'px';

    let selectImage = Math.round(Math.random()*4);

    if(selectImage === 0){
        target.setAttribute('isBom', '1')
    } else {
        target.setAttribute('isBom', '0')
    }

    let newImg = 'images/' + selectImage.toString() + '.png';
    target.setAttribute("src", newImg);
}
window.addEventListener("load", setup);


