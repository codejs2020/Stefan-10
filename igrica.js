let okvir = document.getElementById('okvir');
let plava_kocka = document.getElementById('kocka');
let zelena_kocka = document.getElementById('kocka-zelena');
let crvena_kocka = document.getElementById('kocka-crvena');

let frame = okvir.getBoundingClientRect();
let blue = plava_kocka.getBoundingClientRect();
let green = zelena_kocka.getBoundingClientRect();
let red = crvena_kocka.getBoundingClientRect();

let plavaY = 0;
let plavaX = 0;

plava_kocka.style.top = plavaY + "px";
plava_kocka.style.left = plavaX + "px";




///////////    FUNKCIJE     ////////////

function destroyRed(){  // Crvena kocka nestaje pri dodiru sa plavom
    if (plavaX + frame.left + 50 > red.left && plavaY + frame.top + 50 > red.top && plavaX + frame.left < red.left + 50 && plavaY + frame.top < red.top + 50){
        crvena_kocka.style.display = 'none'
    }
}

function glueGreen(event){  // Plava se lepi za zelenu pri dodiru   // Nezavrsena funkcija
    if (plavaX + frame.left + 60 > green.left && plavaY + frame.top + 60 > green.top && plavaX + frame.left < green.left + 50 && plavaY + frame.top < green.top + 50){
        document.body.removeEventListener("keydown", squareMove);
    }
    if(event.keyCode === 32){

    }
}

function squareMove(event){  // Funkcija za pomeranje plave kocke
    if (event.keyCode === 37 && plavaX + frame.left > frame.left){ // levo
        plavaX -= 10;
    }
    if (event.keyCode === 38 && plavaY + frame.top > frame.top){ // gore
        plavaY -= 10;
    }
    if (event.keyCode === 39 && plavaX + frame.left + 50 < frame.left + 500){ // desno
        plavaX += 10;
    }
    if (event.keyCode === 40 && plavaY + frame.bottom + 50 < frame.bottom + 500){ // dole
        plavaY += 10;
    }

    plava_kocka.style.left = plavaX + "px"
    plava_kocka.style.top = plavaY + "px";

    destroyRed();
    glueGreen();
}



////////////     EventListener     /////////////

document.body.addEventListener("keydown", squareMove)