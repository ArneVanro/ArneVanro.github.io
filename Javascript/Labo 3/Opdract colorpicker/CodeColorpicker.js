const setup = () => {
    let sliders = document.getElementsByClassName('slider');
    sliders[0].addEventListener('change', update);
    sliders[0].addEventListener('input', update);
    sliders[1].addEventListener('change', update);
    sliders[1].addEventListener('input', update);
    sliders[2].addEventListener('change', update);
    sliders[2].addEventListener('input', update);
}

const update = () =>{
    let sliders = document.getElementsByClassName('slider');
    let redValue = document.getElementById('red');
    let greenValue = document.getElementById('green');
    let blueValue = document.getElementById('blue');
    redValue.innerText = 'red ' + sliders[0].value;
    greenValue.innerText = 'green ' + sliders[1].value;
    blueValue.innerText = 'blue ' + sliders[2].value;

    let vierkant = document.getElementById('vierkantje');
    vierkant.style.backgroundColor= "rgb("+ sliders[0].value +","+sliders[1].value+","+sliders[2].value+")";
}
window.addEventListener("load", setup);