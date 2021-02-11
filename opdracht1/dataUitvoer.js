const uitvoer = document.getElementById('uitvoer');



const uitvoeren = () => {
    //deze functie voert de data uit in de div met de id uitvoer
    uitvoer.innerHTML = 'Dit komt uit dataUitvoer.js!';
}

const starten = () => {
    uitvoeren();
}

document.addEventListener('DOMContentLoaded', starten)