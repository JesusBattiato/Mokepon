let ataqueJugador
let ataqueEnemigo


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTiera = document.getElementById('boton-tierra');
    botonTiera.addEventListener('click', ataqueTierra);

    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    let spanMAscotaJugador = document.getElementById("mascota-jugador");
    let radioElements = document.getElementsByName("mascota");
    let j = 0;
    for(let i=0; i < radioElements.length; i++){
        if(radioElements[i].checked){
            spanMAscotaJugador.innerHTML = radioElements[i].value;
            j++
            alert("Seleccionaste a " + radioElements[i].value )
            seleccionarMascotaEnemigo()
            break; 
        }
    }
    if (j == 0) {
        alert("Maniiiiito... elegite un papa.. no seas gil")
    } 
    
    
}

function seleccionarMascotaEnemigo() {
    let spanMAscotaEnemigo = document.getElementById("mascota-enemigo");
    let radioElements = document.getElementsByName("mascota")
    let mascotaAleatorio = aleatorio(1, radioElements.length)
    alert("El enemigo Selecciono " + radioElements[mascotaAleatorio].value)
    spanMAscotaEnemigo.innerHTML = radioElements[mascotaAleatorio].value;

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    alert("Vas a Atacar con " + ataqueJugador)
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    alert("Vas a Atacar con " + ataqueJugador)
    seleccionarAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    alert("Vas a Atacar con " + ataqueJugador)
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    //Numeracion 1-Fuego, 2-Agua, 3-Tierra
    let ataqueAleatorio = aleatorio(1, 3)
    switch (ataqueAleatorio) {
        case 1:
            ataqueEnemigo = "Fuego"            
            break;
        case 2:
            ataqueEnemigo = "Agua"
            break;
        case 3:
            ataqueEnemigo = "Tierra"
            break;    
        default:
            alert("Sucedio un error")
            break;
    }
   alert("El enemigo ataco con " + ataqueEnemigo)    
}

window.addEventListener('load', iniciarJuego)
