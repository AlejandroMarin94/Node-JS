## EJERCICIO 1 – Nuevo estado “edad” en el proyecto hooks

1. Abre el componente principal (App.jsx) del proyecto "hooks".
2. Añade un nuevo estado llamado edad con valor inicial 18:

   const [edad, setEdad] = useState(18)

3. En el JSX, muestra la edad actual en un párrafo, por ejemplo:
   "Edad actual: X años".
4. Crea un botón que ponga la edad a 21 años cuando se pulse.
   Ejemplo de texto del botón: "Cumplir 21".
5. Opcional: crea otro botón que aumente la edad en 1 cada vez
   que se pulse (edad + 1).

# EJERCICIO 2 – Input controlado en hooks (nombre con useState)

1. En el mismo App.jsx del proyecto "hooks", en el input que maneja setNombre, Contempla los siguientes casos:
   - Si el input está vacío, muestra "No has escrito nada aún".
   - Si tiene texto, muestra "Estás escribiendo: ...".
     Ambas opciones anteriores deben aparecer dentro de un span

## EJERCICIO 3 – Botón x5 en MultiplicadorComponent

En el poryecto calculadoraUseState

1. Abre MultiplicadorComponent.jsx.
2. Localiza el estado multiplicador (por ejemplo useState(0)) y
   las funciones que ya multiplican o resetean el valor.
3. Añade un botón nuevo en el JSX con el texto "x5" que llame
   a multiplicar al hacer click:
   - Calcule un nuevo valor multiplicador \* 5.
   - Use setMultiplicador(nuevoValor) para actualizar el estado.
   - Actualice también el mensaje infoMessage para indicar que se ha
     multiplicado por 5.

## EJERCICIO 4 – Mensaje de límite en MultiplicadorComponent

En el poryecto calculadoraUseState:

1. En MultiplicadorComponent.jsx, decide un valor “límite” para
   el multiplicador, por ejemplo 100.

2. Modifica la función que multiplica (x2 o similar) para que:

   - Si el nuevo valor supera el límite (por ejemplo > 100),
     NO actualice el estado multiplicador y, en su lugar:
     - Ponga un mensaje en infoMessage: "Has llegado al límite".
   - Si no supera el límite:
     - Actualice el multiplicador normalmente.
     - Actualice infoMessage indicando la operación que se ha hecho.

3. Opcional:
   - Muestra el valor del límite en pantalla (por ejemplo en un <small>).

## EJERCICIO 5 – Nueva operación “potencia” en CalculadoraComponent

En el poryecto calculadoraUseState:

1. Abre CalculadoraComponent.jsx.
2. Localiza el estado que guarda el tipo de operación
   (por ejemplo operacion o device) y el `<switch>` con las opciones
   sumar, restar

3. Añade una nueva opción al `<switch>` con value="potencia"
   y texto "Potencia". Añade tambien multiplicar y dividir

4. En la función que realiza el cálculo (switch o if/else),
   añade un nuevo caso para todas que realice el calculo necesario.

   (o el equivalente que ya uses en tu código).

5. Guarda y comprueba que al seleccionar cualquiera y pulsar el botón
   de calcular, muestra el resultado correcto.

## EJERCICIO 6 – Mensaje cuando aún no hay resultado en CalculadoraComponent

En el poryecto calculadoraUseState:

1. En CalculadoraComponent.jsx, localiza el estado resultado
   (por ejemplo const [resultado, setResultado] = useState(null)).

2. En el JSX, cambia la parte donde muestras el resultado para que:

   - Si resultado es null (no se ha calculado nada todavía):
     muestre el texto: "Aún no hay ningún resultado".
   - Si resultado NO es null:
     muestre el texto: "Resultado: X" (donde X es el valor de resultado).

3. Puedes hacerlo con un if sencillo, un operador ternario o usando
   && y ||, como prefieras, siguiendo los ejemplos que ya tienes en el código.
