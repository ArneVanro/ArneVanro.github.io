const setup = () => {
    let button = document.getElementById("printTekst");
    button.addEventListener("click",printTekst)
}
const printTekst=() =>{
    let tekst = document.getElementById("tekst");
    console.log(tekst.value);
    let nieuweTekst = "";
    for (let i = 0; i < tekst.value.length; i++) {
        nieuweTekst += " " + tekst.value.charAt(i);
    }
    console.log(nieuweTekst);
}
window.addEventListener("load", setup);