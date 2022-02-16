const setup = () => {
    const array = ['Arne', 'Merel', 'Linde', 'Kris', 'Isabelle'];
    console.log(array.length);
    console.log(array[0]);
    console.log(array[2]);
    console.log(array[4]);
    let extraNaam = prompt("Voeg een naam toe", "naam");

    const voegNaamToe=(extraNaam) => {
        array.push(extraNaam);
        console.log(array);
    }
    voegNaamToe(extraNaam);
    console.log(array);
}
window.addEventListener("load", setup);