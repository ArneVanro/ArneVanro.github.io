const setup = () => {
    let button = document.getElementById("valideer");
    button.addEventListener('click', valideer);
}
const valideer = () =>{
    let voornaam = document.getElementById("firstName");
    if(voornaam.value.trim.length > 30){
        voornaam.style.backgroundColor = 'none';
    }
    let familienaam = document.getElementById("familienaam");
    if(familienaam.value.trim.length > 50){
        voornaam.style.backgroundColor = 'red';
    }
    if(familienaam.value.trim.length < 0){
        voornaam.style.backgroundColor = 'red';
    }
}
window.addEventListener("load", setup);