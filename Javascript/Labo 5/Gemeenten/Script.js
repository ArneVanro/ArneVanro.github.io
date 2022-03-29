const setup = () => {

        vraagGemeentes();
}
const vraagGemeentes = () => {
        let gemeentes = [];
        let opvragen = true;
        while (opvragen){
                let nieuweGemeente = window.prompt("Geef een gemeente op");
                if(nieuweGemeente !== "stop"){
                        gemeentes.push(nieuweGemeente);
                } else {
                        opvragen = false;
                }
        }
        gemeentes.sort();
        let list = document.getElementById("Gemeente");
        for (let i = 0; i < gemeentes.length; i++) {
                let optie = document.createElement('option');
                optie.value = gemeentes[i];
                console.log(gemeentes[i]);
                list.appendChild(optie);
        }
}
window.addEventListener("load", setup);