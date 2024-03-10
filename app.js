let numeroSecreto = 0;
let intentos = 0;
let listanumeros = [];
let numeromaximo = 10;

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarintento() {
let numerodeUsuario = parseInt(document.getElementById('valorusuario').value);

console.log(intentos);

console.log(numerodeUsuario === numeroSecreto);
if(numerodeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1)? 'intento': 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

} else {
    //EL usuario no acerto.
    if(numerodeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor')
        
    } else {
        if(numerodeUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor')
        }
    } 
    intentos++;
 limpiarcaja();
    
}
return;
}
function limpiarcaja(){
document.querySelector('#valorusuario').value = '';

}



function generarnumerosecreto() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    if(listanumeros.length == numeromaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.')

    } else {

    
    if (listanumeros.includes(numerogenerado)){
        return generarnumerosecreto();

    }else{
    listanumeros.push(numerogenerado);
    return numerogenerado;
}
}
}

function Inicio(){
    asignarTextoElemento('h1','Juego del Numero Secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeromaximo}`);
    numeroSecreto = generarnumerosecreto();
    intentos= 1;

}



function reiniciarjuego() {
    limpiarcaja();
    Inicio();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

Inicio();