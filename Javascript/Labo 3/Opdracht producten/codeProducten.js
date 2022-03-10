const setup= () => {
    let button1 = document.getElementById('bereken');
    button1.addEventListener('click', bereken);
}
const bereken =() =>{
    let prijzen = document.getElementsByClassName('prijs');
    let aantallen = document.getElementsByClassName('aantal');
    let btw = document.getElementsByClassName('btw');
    let subtotaal = document.getElementsByClassName('subtotaal');
    let totaal = document.getElementsByClassName('totaal');
    let totaalWaarde = 0;

    for (let i = 0; i < prijzen.length; i++) {
        subtotaal[i].innerHTML = parseFloat(aantallen[i].value * parseInt(prijzen[i].textContent) * (1+parseFloat(btw[i].textContent)/100)).toFixed(2);
        totaalWaarde += parseFloat(subtotaal[i].textContent);
        subtotaal[i].innerHTML += ' Euro';
    }
    totaal[0].innerHTML = parseFloat(totaalWaarde).toFixed(2) + ' Euro';
}
window.addEventListener("load", setup);