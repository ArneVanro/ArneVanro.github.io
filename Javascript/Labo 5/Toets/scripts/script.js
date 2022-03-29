const setup = () => {

    let button = document.getElementById("action");
    button.addEventListener("click", verdeelPassagiers);
}
const verdeelPassagiers= () =>{
    let passagiers = document.getElementById("passagiers").value;
    let passagierArray = passagiers.split(",");
    let karren = [];
    let count = 0;
    console.log(passagierArray.length);
    for (let i = 0; i < passagierArray.length; i++) {
        var rij = "";
        if(count <= 2 ){
            rij += passagierArray[i];
            count++;
        } else {
            rij += "<br>";
            count=0;
        }
    }
    console.log(rij);
}
window.addEventListener("load", setup);