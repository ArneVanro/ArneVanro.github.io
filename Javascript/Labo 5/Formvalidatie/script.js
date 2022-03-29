const setup = () => {
    let button = document.getElementById("valideer");
    button.addEventListener('click', valideer);
}
const valideer = () =>{
    let voornaam = document.getElementById("voornaam");
    if(voornaam.value.trim().length > 30){
        voornaam.style.border = '2px solid red';
        document.getElementById("voornaamError").innerHTML = "<p>Error: max. 30 karakters</p>"
    }else{
        voornaam.style.border = '1px solid black'
        document.getElementById("voornaamError").innerHTML = ""
    }
    let achternaam = document.getElementById("familienaam");
    if(achternaam.value.trim().length <1){
        achternaam.style.border = '2px solid red'
        document.getElementById("familienaamError").innerHTML = "<p>Error: verplicht veld</p>"
    }else if(achternaam.value.trim().length > 50){
        achternaam.style.border = '2px solid red'
        document.getElementById("familienaamError").innerHTML = "<p>Error: max. 50 karakters</p>"
    }else {
        achternaam.style.border = '1px solid black'
        document.getElementById("familienaamError").innerHTML = ""
    }
    let email = document.getElementById("email");
    if(email.value.trim().length <1){
        email.style.border = '2px solid red'
        document.getElementById("mailError").innerHTML = "<p>Error: verplicht veld</p>"
    }else{
        email.style.border = '1px solid black'
        document.getElementById("mailError").innerHTML = ""
    }
    if(email.value.split('@').length > 2){
        email.style.border = '2px solid red'
        document.getElementById("mailError").innerHTML = "<p>Error: geen geldig email adres</p>"
    }else{
        if(email.value.split('@')[0].length<1){
            email.style.border = '2px solid red'
            document.getElementById("mailError").innerHTML = "<p>Error: geen geldig email adres</p>"
        }else if(email.value.split('@')[1].length<1){
            email.style.border = '2px solid red'
            document.getElementById("mailError").innerHTML = "<p>Error: geen geldig email adres</p>"
        }else {
            email.style.border = '1px solid black'
            document.getElementById("mailError").innerHTML = ""
        }
    }
    let aantalKinderen = document.getElementById("kinderen");
    if(aantalKinderen.value < 0){
        aantalKinderen.style.border = '2px solid red'
        document.getElementById("kinderenError").innerHTML = "<p>error: Is geen positief getal</p>"

    }else if(aantalKinderen.value > 99){
            aantalKinderen.style.border = '2px solid red'
            document.getElementById("kinderenError").innerHTML = "<p>error: is niet mogelijk</p>"
    }else{
        aantalKinderen.style.border = '1px solid black'
            document.getElementById("kinderenError").innerHTML = "<p></p>"
    }

}
window.addEventListener("load", setup);