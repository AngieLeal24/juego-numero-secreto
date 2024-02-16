let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste del número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    let numerosGenerados = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numerosGenerados);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los nuemros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('P', 'Ya se sortearon todos los números posibles');
    } else {
        // si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numerosGenerados)) {
            return generarNumeroSecreto();
        } else { //Si no lo esta 
            listaNumerosSorteados.push(numerosGenerados);
            return numerosGenerados;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpar la caja, 
    limpiarCaja();
    //indicar mensaje de intervalos numeros, 
    //generar numero aleatorio, 
    //inicializar el numero de intentos, 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego,
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();