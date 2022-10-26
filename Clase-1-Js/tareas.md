## Tarea sobre coerción de datos

#### ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADOS

¿Cuál crees que será el resultado de la ejecución de estas operaciones? Piensa primero cual será el resultado y escribelo. 
Luego, prueba ver la respuesta usando la siguiente pagina: https://jsconsole.com/ (solamente debes copiar y pegar el cálculo sin el signo "=", 
ni la doble barra del comentario, ni tu respuesta). Después presionar enter, así obtendrás el resultado automaticamente.

```
6 / "3" = 2 "entiende que el 3 es un numero"

"2" * "3" = 6 "entiende que ambos son numero"

4 + 5 + "px" = 9px "suma 4+9 y concatena px"

"$" + 4 + 5 = $45 "idem anterior"

"4" - 2 = 2 "entiende que ambos son numeros"

"4px" - 2 = NaN "4px lo ve como false y no puede hacer cuentas con eso"

7 / 0 = no se...deberia ser error porque no se puede dividir por 0???

parseInt("09") = 9 "transforma el string en number entero"

[3]+[3]-[10] = -4? no estoy seguro de la funcion de los corchetes en javascript

3>2>1 = true "3 es mayor que 2 y 2 mayor a 1"

[] == ![] = true "deberian ser iguales...

12 + ""  =  concatena? o da true?

"15" * 2  = 30 "interpreta que ambos son numeros"

"15" - "11" = 4 "idem anterior"

undefined + 6 = NaN "undefined no es un numero, no es nada, solo espacio reservado en memoria

"Hello" + null = concatena?

null + 25 = 25 "seria como 0 + 25 = 25"

true + true = true o 2? porque el valor true=1...

false + 10 = 10 "false=0 --> 0+10=10"

5 && 2 = no se como interpreta esto javascript, seria true?

2 && 5 = idem anterior

5 || 0 = 5 que seria igual a true, osea true||false=true

0 || 5 = 5 "idem anteriore"

true && false = false "porque ambos deben ser true para que de como resultado true"

false || !false = true "por el signo de negacion que invierte el resultado !false=true"

!2 = false "porque al ser 2>0=true y la negacion cambia el valor a false"

"texto" || 0 = true o texto, porque texto=true y ""=false

2 || "prueba“ =
```
