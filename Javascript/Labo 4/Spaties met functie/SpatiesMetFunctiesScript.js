const setup = () => {
    let button = document.getElementById("printTekst");
    let tekst = document.getElementById("tekst").value;
    printTekst(tekst);
    button.addEventListener("click", setup);
}
const printTekst=(inputText) =>{
    let nieuweTekst = "";
    for (let i = 0; i < inputText.length; i++) {
        nieuweTekst += " " + inputText.charAt(i);
    }
    console.log(nieuweTekst);
}
window.addEventListener("load", setup);