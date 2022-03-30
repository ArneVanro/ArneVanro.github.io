const setup = () => {
    let sliders = document.getElementsByClassName('slider');
    update();
    sliders[0].addEventListener('change', update);
    sliders[0].addEventListener('input', update);
    sliders[1].addEventListener('change', update);
    sliders[1].addEventListener('input', update);
    sliders[2].addEventListener('change', update);
    sliders[2].addEventListener('input', update);

    let saveButton = document.getElementById("save")
    saveButton.addEventListener('click', save)

}

const update = () =>{
    let sliders = document.getElementsByClassName('slider');

    updateWaarden()

    let vierkant = document.getElementById('vierkantje');
    vierkant.setAttribute('style', "background-color: rgb("+ sliders[0].value +","+sliders[1].value+","+sliders[2].value+")")
}

const save = () =>{
    let sliders = document.getElementsByClassName('slider');

    let div = document.getElementsByClassName('opgeslaanKleuren')[0]
    let nieuwDiv = document.createElement('div')
    nieuwDiv.setAttribute('style', "background-color: rgb("+ sliders[0].value +","+sliders[1].value+","+sliders[2].value+")")
    nieuwDiv.setAttribute('class', "opgeslaanKleur")
    nieuwDiv.setAttribute('data-red', sliders[0].value)
    nieuwDiv.setAttribute('data-green', sliders[1].value)
    nieuwDiv.setAttribute('data-blue', sliders[2].value)
    nieuwDiv.addEventListener('click', pasKleurToe)

    let verwijderKnop = document.createElement('input')
    verwijderKnop.setAttribute('class', 'verwijderKruis')
    verwijderKnop.setAttribute('value', 'X')
    verwijderKnop.setAttribute('type', 'button')
    verwijderKnop.addEventListener('click', verwijder)
    nieuwDiv.appendChild(verwijderKnop)
    div.appendChild(nieuwDiv)
}

const pasKleurToe =(event) =>{
    let sliders = document.getElementsByClassName('slider');
    let vierkant = document.getElementById('vierkantje')
    vierkant.setAttribute('style', event.target.getAttribute('style'))
    sliders[0].value = event.target.getAttribute('data-red')
    sliders[1].value = event.target.getAttribute('data-green')
    sliders[2].value = event.target .getAttribute('data-blue')

    updateWaarden()
}

const verwijder =(event) =>{
    event.target.parentElement.remove()
    update()
}

const updateWaarden =() =>{
    let sliders = document.getElementsByClassName('slider');

    let redValue = document.getElementById('red');
    let greenValue = document.getElementById('green');
    let blueValue = document.getElementById('blue');

    redValue.innerText = 'red ' + sliders[0].value;
    greenValue.innerText = 'green ' + sliders[1].value;
    blueValue.innerText = 'blue ' + sliders[2].value;
}
window.addEventListener("load", setup);