// Numeros
  // Implementar una función "suma" que retorne la suma de 2 numeros
// ejemplo: suma(2,3) retorna 5

function suma(n1, n2) {
    return n1 + n2;
}
console.log("Suma(2,3): ", suma(2, 3));
    
// Implementar una función "elevarAlCubo" que eleve al cubo un numero
// ejemplo: elevarAlCubo(3) retorna 27
    
function elevarAlCubo(n) {
    return n ** 3;
}
console.log("elevarAlCubo(3): ", elevarAlCubo(3));
    
// Implementar una función "restoDivisionEntera" para devolver el resto de una división
// entera entre un dividendo y un divisor.
// ejemplo: restoDivisionEntera(3,2) retorna 1
    
function restoDivisionEntera(n1, n2) {
    return n1 % n2;
}
console.log("restoDivisionEntera(3,2): ", restoDivisionEntera(3, 2));
    
// Implementar una función "numeroPi" para devolver el numero PI
// ejemplo: numeroPi() retorna 3,14...
    
function numeroPi() {
    return Math.PI;
}
console.log("numeroPi(): ", numeroPi());
    
// Implementar una función "numeroRandom" para devolver un número random / aleatorio
// ejemplo: numeroRandom() retorna 0,123...

function numeroRandom() {
    return Math.random();
}
console.log("numeroRandom(): ", numeroRandom());
    
// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
// ejemplo: mejorNumeroRandom(1,6) retorna 3
    
function mejorNumeroRandom(a, b) {
    return Math.random() * (b - a) + a;
}
console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1, 6));
    
// Cadenas de Caracteres
    
// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"
    
function transformarMayuscula(palabra) {
    return palabra.toUpperCase();
}
console.log(
    'transformarMayuscula("Plataformas Móviles"): ',
    transformarMayuscula("Plataformas Móviles")
);
    
// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
// ejemplo: primeraLetra("Plataformas") retorna "P"
    
function primeraLetra(palabra) {
    return palabra[0];
}
console.log('primeraLetra("Plataformas"): ', primeraLetra("Plataformas"));
    
// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
// ejemplo: ultimaLetra("Plataformas") retorna "s"
    
function ultimaLetra(palabra) {
    return palabra[palabra.length - 1];
}
console.log('ultimaLetra("Plataformas"): ', ultimaLetra("Plataformas"));
    
// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"
    
function primeraLetraMayuscula(palabra) {
    return palabra[0].toUpperCase();
}
console.log(
    'primeraLetraMayuscula("plataformas"): ',
    primeraLetraMayuscula("plataformas")
);
    
// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];
    
function palabraAListaDeLetras(texto) {
    let listaResultado = [];
    for (var i = 0; i < texto.length; i++) {
        listaResultado.push(texto[i]);
    }
    return listaResultado;
}
console.log(
    'palabraAListaDeLetras("hola"): ',
    palabraAListaDeLetras("hola")
);
    
// Implementar una función "listaDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";
    
function listadoDeLetrasAPalabra(listado) {
    var palabraResultado = "";
    for (var i; i < listado.length; i++) {
        palabraResultado += listado[i];
    }
    return palabraResultado;
}
console.log(
    'listadoDeLetrasAPalabra(["h", "o", "l", "a"]): ',
    listadoDeLetrasAPalabra(["h", "o", "l", "a"])
);
    
// Implementar una función "palabraInvertida" que devuelva la palabra invertida
// ejemplo: palabraInvertida("hola") retorna "aloh";
    
function palabraInvertida(palabra) {
    let resultadoPalabra = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        resultadoPalabra += palabra[i];
    }
    return resultadoPalabra;
}
console.log('palabraInvertida("hola"): ', palabraInvertida("hola"));