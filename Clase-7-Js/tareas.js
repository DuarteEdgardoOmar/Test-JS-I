// Asincronia y Stack

// ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADORS
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? Piensa primero cual será el resultado y escribelo. Luego prueba ver la respuesta usando la siguiente pagina: https://jsconsole.com/  y presioná enter, asi obtendras el resultado automaticamente)

function imprimir() {
    console.log(1);
    setTimeout (function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log (4);
}

imprimir();

/*se imprime en este orden
primero imprime el 1 porque es una ejecucion directa
segundo imprime el 4 porque es una ejecucion directa
tercero imprime el 3 porque al tener setTimeout va a la cola en la pila
cuarto imprime el 2 porque al tener setTimeout con 1 segundo de demora, va a la pila en ultimo lugar */