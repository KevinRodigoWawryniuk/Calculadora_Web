var aporte = document.getElementById("accesodeejercicio");

var botones = [14];
for (let i = 0; i < 10; i++) {
    botones[i] = document.getElementById(`boton${i}`);
}
botones[10] = document.getElementById("botonmas");
botones[11] = document.getElementById("botonmenos");
botones[12] = document.getElementById("botonpor");
botones[13] = document.getElementById("botondividir");

var formulario = document.getElementById("Resolver");

var botonResolver = document.getElementById("botonResolver");
console.log(botonResolver);

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    botonResolver.addEventListener('click', function (event) {
        event.preventDefault();

        const simbolos = /[\+\-\*\/]/;

        var encontrado = aporte.value.match(simbolos);

        var funcion;

        if (encontrado == '+') {
            funcion = 1;
            console.log(funcion);
        } else if (encontrado == '-') {
            funcion = 2;
            console.log(funcion);
        } else if (encontrado == '*') {
            funcion = 3;
            console.log(funcion);
        } else if (encontrado == '/') {
            funcion = 4;
            console.log(funcion);
        }

        Resolver(aporte, funcion);
    })
})

function CargarDatos(valor) {
    aporte.value += valor;
}
function BorrarDatos(valor) {
    aporte.value = valor;
}
function Resolver(valor, funccion) {

    // datos para resolver
    let resultadoinput = document.getElementById("resultado");
    let resultado = 0;

    // datos para saber como resolver el ejercicio
    switch (funccion) {

        case 1:
            let partessuma = valor.value.split('+');

            let [sumado1, sumado2] = partessuma;

            resultado = parseInt(sumado1, 10) + parseInt(sumado2, 10);

            resultadoinput.value = "El resultado es => " + resultado;
            break;
        case 2:
            let partesresta = valor.value.split('-');
            let [minuendo, sustraendo] = partesresta;

            resultado = parseInt(minuendo, 10) - parseInt(sustraendo, 10);

            resultadoinput.value = "El resultado es => " + resultado;
            break;
        case 3:
            let partesmultiplicacion = valor.value.split('*');
            let [multiplicando, multiplicador] = partesmultiplicacion;

            resultado = parseInt(multiplicando, 10) * parseInt(multiplicador, 10);

            resultadoinput.value = "El resultado es => " + resultado;
            break;
        case 4:
            let partesdivicion = valor.value.split('/');
            let [dividendo, divisor] = partesdivicion;

            resultado = parseInt(dividendo, 10) / parseInt(divisor, 10);

            resultadoinput.value = "El resultado es => " + resultado;
            break;
    }
}