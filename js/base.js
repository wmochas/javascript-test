"Strict Mode" //undeclared variables are not automatically global.
var variableGlobal = "A mi me ven todos";

function sumar(a, b) {
    return a + b;
}

function mostrarSuma() {
    document.getElementById("demo").innerHTML = "1+1=" + sumar(-1, 1) + " ?";
}
//función que muestra como usar objetos
function llamarObjeto() {
    //de esta manera defino un objeto
    var persona = {
        nombre: "Wilson",
        apellido: "Mochas",
        nombreCompleto:  function () {
            return this.nombre+" "+ this.apellido;
        }
    };
    //para acceder a los valores puedo usar: objectName.propertyName ó objectName["propertyName"], para llamar a funciones dentro del objeto: objectName.methodName()
    document.getElementById("objeto").innerHTML = "Mi nombre es " + persona.nombre+", mi nombre completo es "+persona.nombreCompleto();
}

function llamarControlError() {
    try {
        adddlert("Welcome guest!");
    }catch(err) {
        //JavaScript will actually create an Error object with two properties: name and message.
        window.alert(`${err.name} - ${err.message}`);//aca se uso template string
    }
    finally {
        console.info("Ejecuto código en bloque finally")
    }
    try {
        throw "lanzo exception tipo string";
    }catch (err) {
        window.alert(`Error ${err}:name:  ${err.name} - message: ${err.message}`);
    }
    var message, x;
    message = document.getElementById("error");
    message.innerHTML = "";
    x = document.getElementById("inputError").value;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}

function funcionGlobal() {

}
