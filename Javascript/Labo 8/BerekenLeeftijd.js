const setup = () => {
    const vandaag = new Date();
    console.log(vandaag.toString())
    const verjaardag = new Date(2003,8,24)
    console.log(((vandaag.getTime() - verjaardag.getTime())/(1000*3600*24)))
}
window.addEventListener("load", setup);