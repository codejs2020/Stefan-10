const okvir = document.getElementById('okvir')
const plavaKocka = document.getElementById('kocka')
const zelenaKocka = document.getElementById('kocka-zelena')
const crvenaKocka = document.getElementById('kocka-crvena')

const frame = okvir.getBoundingClientRect()
const green = zelenaKocka.getBoundingClientRect()
const red = crvenaKocka.getBoundingClientRect()

const blueWidth = 50
const blueHeight = 50

let plavaY = 0
let plavaX = 0

plavaKocka.style.top = plavaY + 'px'
plavaKocka.style.left = plavaX + 'px'

/// ////////    FUNKCIJE     ////////////

function destroyRed () { // Crvena kocka nestaje pri dodiru sa plavom
  if (plavaX + frame.left + blueWidth > red.left && plavaY + frame.top + blueHeight > red.top &&
    plavaX + frame.left < red.left + blueWidth && plavaY + frame.top < red.top + blueHeight) {
    crvenaKocka.style.display = 'none'
  }
}

function glueGreen (event) { // Plava se lepi za zelenu pri dodiru   // Nezavrsena funkcija
  // Iz nekog razloga u liniji dole nece da radi sa sirinom i visinom 50, nego mora da se stavi 60
  if (plavaX + frame.left + 60 > green.left && plavaY + frame.top + 60 > green.top &&
    plavaX + frame.left < green.left + blueWidth && plavaY + frame.top < green.top + blueHeight) {
    document.body.removeEventListener('keydown', squareMove)
    document.getElementById('press-space').innerHTML = 'Press SPACE'
  }
  if (event.keyCode === 32) {
    document.body.addEventListener('keydown', squareMove)
    document.getElementById('press-space').innerHTML = ''
  }
}

function squareMove (event) { // Funkcija za pomeranje plave kocke
  if (event.keyCode === 37 && plavaX + frame.left > frame.left) { // levo
    plavaX -= 10
  }
  if (event.keyCode === 38 && plavaY + frame.top > frame.top) { // gore
    plavaY -= 10
  }
  if (event.keyCode === 39 && plavaX + frame.left + 50 < frame.left + 500) { // desno
    plavaX += 10
  }
  if (event.keyCode === 40 && plavaY + frame.bottom + 50 < frame.bottom + 500) { // dole
    plavaY += 10
  }

  plavaKocka.style.left = plavaX + 'px'
  plavaKocka.style.top = plavaY + 'px'

  destroyRed()
  glueGreen(event)
}

/// /////////     EventListener     /////////////

document.body.addEventListener('keydown', squareMove)
document.body.addEventListener('keyup', glueGreen)
