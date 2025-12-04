
## EJERCICIO 1

1. Unsaod mi-primera-app, crea una nueva constante llamada tercera:

   const tercera = "Texto de prueba para la tercera constante"

2. Pinta esa constante en un nuevo párrafo debajo de segunda:

   ```<p>{tercera}</p>```

3. Comprueba que se ve en el navegador.


## EJERCICIO 2

1. Asegúrate de que HolaMundoComponent está importado en App.jsx:

   ```import HolaMundoComponent from './components/HolaMundoComponent'```

2. Dentro del return, debajo del último <p>, añade:

   ```<HolaMundoComponent />```

3. Guarda y comprueba que aparece el texto "Hola Mundo".

Versión extra:
- Duplica el componente para ver que se puede reutilizar:
```
   <HolaMundoComponent />
   <HolaMundoComponent />
   <HolaMundoComponent />
```

## EJERCICIO 3

Objetivo:
- Entender por qué usamos <>...</> o un <div> padre.

Enunciado (en App.jsx de mi-primera-app):
1. Elimina temporalmente el fragmento <> y </> y deja el return así:
```
   return (
     <p>{titulo}</p>
     <p>{segunda}</p>
   )
```
2. Intenta guardar y ver qué error da  en consola.
3. Después, corrige de una de estas maneras:

    A) Envolviendo todo en un ```<div>```:   
```
      return (
        <div>
          <p>{titulo}</p>
          <p>{segunda}</p>
        </div>
      )
```
    B) Volviendo a usar el fragment:
```
      return (
        <>
          <p>{titulo}</p>
          <p>{segunda}</p>
        </>
      )
```

## EJERCICIO 4

1. Crea un archivo nuevo en src/components llamado:
   ```PresentacionComponent.jsx```

2. Dentro, crea un componente:
```
   const PresentacionComponent = () => {
     return (
       <div>
         <h2>Presentación</h2>
         <p>Mi nombre es [tu nombre] y este es mi primer componente en React.</p>
       </div>
     )
   }

   export default PresentacionComponent
```
3. Importa este componente en App.jsx:

   ```import PresentacionComponent from './components/PresentacionComponent'```

4. Píntalo debajo de HolaMundoComponent:
```
   <HolaMundoComponent />
   <PresentacionComponent />
   ```



## EJERCICIO 5

1. Añade un cuarto objeto al array data en mi -segunda-app:
```
   {
     id: 4,
     title: 'Libro 4',
     description: 'Descripcion del libro 4',
     price: 20,
     IVA: 4,
     premium: false
   }
```
2. Guarda y comprueba que ahora se pintan 4 bloques de libro
   en pantalla (antes había 3).


## EJERCICIO 6

1. En el JSX donde haces el map de data (dentro de return),
   añade una nueva línea para mostrar si el libro es premium:

   ```<p>Premium: {e.premium ? 'Sí' : 'No'}</p>```

2. Comprueba que para cada libro aparece "Sí" o "No"
   dependiendo del valor booleano de ```e.premium```.


## EJERCICIO 7

1. En el mismo map, debajo de "Price", añade:

   ```<p>Precio total (con IVA): {e.price + e.IVA}</p>```

2. Comprueba que para cada libro aparece el cálculo correcto.

## EJERCICIO 8
---------------------------------------------

1. Cambia el valor de tituloTienda por un texto más personalizado, por ejemplo:

   ```const tituloTienda = 'Librería React de [tu nombre]'```

2. Comprueba que el ```<h1>``` se actualiza con el nuevo texto:

   ```<h1>{tituloTienda}</h1>```


## EJERCICIO 9 – Mini “landing” de la tienda

1. Basándote en mi-segunda-app, crea un componente nuevo:

```   CabeceraTiendaComponent.jsx (en src/components)```
```
   const CabeceraTiendaComponent = () => {
     const titulo = 'Bienvenido a mi tienda React'
     const subtitulo = 'Aquí verás una lista de libros de ejemplo'

     return (
       <>
         <h1>{titulo}</h1>
         <p>{subtitulo}</p>
       </>
     )
   }

   export default CabeceraTiendaComponent
```
2. En mi-segunda-app, importa este componente y úsalo encima del título actual
   de la tienda (o sustituyendo el h1 de tituloTienda):
```
   import CabeceraTiendaComponent from './components/CabeceraTiendaComponent'

   function App() {
     const tituloTienda = 'Mi tienda personal.'
     const data = [ ... ]

     return (
       <>
         <CabeceraTiendaComponent />

         {/* Aquí debajo va el map de data para mostrar los libros */}
       </>
     )
   }
```
3. Deja el map de libros tal y como lo tienes (con el array data),
   para que se muestre la lista de libros debajo de la cabecera.