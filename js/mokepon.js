let ataqueJugador
let ataqueEnemigo
let resultadoAtaques
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTiera = document.getElementById('boton-tierra');
    botonTiera.addEventListener('click', ataqueTierra);

    let reload = document.getElementById('boton-reiniciar');
    reload.addEventListener('click',reiniciar);
    
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
            //alert("Seleccionaste a " + radioElements[i].value )
            seleccionarMascotaEnemigo()
            break; 
        }
    }
    if (j == 0) {
        alert("Maniiiiito... elegite un papa.. no seas gil")
    } 
    
    document.getElementById("seleccionar-ataque").style.display = '';
}

function seleccionarMascotaEnemigo() {
    let spanMAscotaEnemigo = document.getElementById("mascota-enemigo");
    let radioElements = document.getElementsByName("mascota")
    let mascotaAleatorio = aleatorio(0, (radioElements.length-1))
    //alert("El enemigo Selecciono " + radioElements[mascotaAleatorio].value)
    spanMAscotaEnemigo.innerHTML = radioElements[mascotaAleatorio].value;

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    seleccionarAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    //Numeracion 1-Fuego, 2-Agua, 3-Tierra
    let ataqueAleatorio = aleatorio(1, 3)
    switch (ataqueAleatorio) {
        case 1:
            ataqueEnemigo = "FUEGO"            
            break;
        case 2:
            ataqueEnemigo = "AGUA"
            break;
        case 3:
            ataqueEnemigo = "TIERRA"
            break;    
        default:
            alert("Sucedio un error")
            break;
    }

   combate()
   crearMensaje()  

}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador) {
        resultadoAtaques = "Empataron"        
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AGUA') {
        resultadoAtaques = "Ganaste"
        vidasEnemigo--
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'TIERRA') {
        resultadoAtaques = "Ganaste"
        vidasEnemigo--
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'FUEGO') {
        resultadoAtaques = "Ganaste"
        vidasEnemigo--
    }else{
        resultadoAtaques = "Perdiste gil"
        vidasJugador--
    }

    spanVidasEnemigo.innerHTML = vidasEnemigo
    spanVidasJugador.innerHTML = vidasJugador

    revisarVidas()

}

function crearMensaje() {
    let sectionMensaje = document.getElementById("mensajes");
    let parrafo = document.createElement('p');
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " - " + resultadoAtaques;
    sectionMensaje.appendChild(parrafo);
}

function revisarVidas() {
    if (vidasJugador == 0) {
        document.getElementById("juego").style.display = 'none';
        document.getElementById("resultado-final").style.display = '';
        document.getElementById("titulo-final").innerHTML = "Papon...Perdiste.. Por Gil"        
        document.getElementById("vidas-e").innerHTML = vidasEnemigo

    } else if(vidasEnemigo == 0){
        document.getElementById("juego").style.display = 'none';
        document.getElementById("resultado-final").style.display = ''
        document.getElementById("vidas-j").innerHTML = vidasJugador
        
    }
}

function reiniciar() {
    location.reload();
}


window.addEventListener('load', iniciarJuego)
