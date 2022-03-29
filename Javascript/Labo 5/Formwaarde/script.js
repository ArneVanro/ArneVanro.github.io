const setup = () => {
    let button = document.getElementById("Afprinten");
    button.addEventListener('click', afprinten);
}
const afprinten = () => {
    let isRoker = document.getElementById("isRoker");
    let moedertaal = document.getElementsByName("Moedertaal");
    let favoBuurland = document.getElementById("FavoLand");
    let bestelling = document.getElementById("Bestelling");
    let selectedMoedertaal;

    for(let i = 0; i < moedertaal.length; i++) {
        if(moedertaal[i].checked){
            selectedMoedertaal = moedertaal[i].text;
        }
    }
    if(isRoker.checked){
        console.log('is een roker')
    } else {
        console.log('is geen roker')
    }
    console.log("Moedertaal is " + selectedMoedertaal);
    console.log("Favoriete buurland is " + favoBuurland.value);
    console.log("Bestelling: een multi select met keuzes " + bestelling.value);
}
window.addEventListener("load", setup);