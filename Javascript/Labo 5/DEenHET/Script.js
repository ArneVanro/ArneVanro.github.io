const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    zin = " " + zin + " ";
    console.log(zin.split(" de ").join(" het "));
}
window.addEventListener("load", setup);