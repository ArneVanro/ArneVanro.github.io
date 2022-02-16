const setup = () => {
    let knop = document.getElementById("subKnop");
    knop.addEventListener("click", substring);
}
const substring =() =>{
    let beginIndex = document.getElementById("beginIndex");
    let eindIndex = document.getElementById("eindIndex");
    let tekst = document.getElementById("inputTekst");
    let outputTekst = document.getElementById("output");
    outputTekst.innerHTML = tekst.value.substring(beginIndex.value, eindIndex.value);

}
window.addEventListener("load", setup);