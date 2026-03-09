/*----------------------------*/
/*--------Ejercicio A--------*/
/*--------------------------*/


var cantidadDeGatos = 10;

for (var i = 1; i <= cantidadDeGatos; i++) {

    if (i % 3 === 1) {
        console.log("Gato #" + i + ": 😺");
    } 
    else if (i % 3 === 2) {
        console.log("Gato #" + i + ": 😸");
    } 
    else {
        console.log("Gato #" + i + ": 😹");
    }

}

/*----------------------------*/
/*--------Ejercicio B--------*/
/*--------------------------*/

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
    
    var pasos = "";
    
    // Generamos las huellas
    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos += "🐾";
    }
    
    console.log("Gato #" + i + ": 🐈 " + pasos);
}
