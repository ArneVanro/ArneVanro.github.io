student={
    klas: '1TIa',
    naam: 'Arne',
    achternaam:'Vanroose'
}
const setup = () => {
    console.log(JSON.stringify(student))
    student={"klas":"1TIa","naam":"Arne","achternaam":"Vanroose"}
    console.log(student.achternaam)
}
window.addEventListener("load", setup);