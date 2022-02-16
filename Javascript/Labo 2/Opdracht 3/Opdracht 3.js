const setup = () => {
    let knopTekst=document.getElementById("veranderTekst");
    knopTekst.addEventListener("click", veranderen);
}
const veranderen =() =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);