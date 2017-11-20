var nivelUno = ["gatito", "cabra", "remera", "perro", "nombre", "comida", "lapiz", "espejo", "juego", "cable"];
var nivelDos = ["mochila", "armario", "mediano", "libreria", "peluche", "almohada", "heladera", "lampara", "vestido", "campera"];
var nivelTres = ["biblioteca", "ventilador", "ortografia", "televisor", "computadora", "automotor", "taquicardia", "billetera", "depresion", "pastillas"];
var arrayUno = [];


for (var i = 0; i < nivelUno.length; i++) {
    var elementoRandomArrayA = nivelUno[Math.round(Math.random() *  9)]
    
    console.log(elementoRandomArrayA);
}