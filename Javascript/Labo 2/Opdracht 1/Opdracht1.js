const setup = () => {
    var melding = window.alert("Een melding")
    var vraag = window.confirm("Ben je dit zeker?")
    var naam = window.prompt("Wat is uw naam", "den dirk")

    console.log(melding);
    console.log(vraag);
    console.log(naam);
}
window.addEventListener("load", setup);