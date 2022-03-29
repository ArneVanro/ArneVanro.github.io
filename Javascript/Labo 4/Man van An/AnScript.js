const setup = () => {
    delenAnVanMan("De man van An geeft geen hand aan ambetante verwanten")
}

const delenAnVanMan = (zin) =>{
    zin = zin.toLowerCase();
    let end = false;
    let count = 0;
    while(!end){
        if(zin.indexOf("an") !== -1){
            zin = zin.substring(zin.indexOf("an")+2);
            count++;
        } else {
            end = true;
        }
    }
    console.log(count);
}
window.addEventListener("load", setup);