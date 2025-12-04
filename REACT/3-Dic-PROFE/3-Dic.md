## EJERCICIO 1 – Añadir un nuevo bloque de información

1. Crea un nuevo componente llamado MasInfoLibroComponent.jsx
   en la carpeta de componentes de resenayLibro-Componetizada.

2. Dentro de MasInfoLibroComponent, devuelve un JSX sencillo, por ejemplo:

   - Un título h2: "Más información del libro"
   - 2 o 3 párrafos con detalles inventados:
     - Año de publicación
     - Género
     - Idioma o lo que quieras

3. Importa MasInfoLibroComponent en InfoLibroPage.jsx.

4. En el JSX de InfoLibroPage, úsalo debajo de InfoLibroComponent.
   Por ejemplo:

```
   InfoLibroComponent
   MasInfoLibroComponent
   DondeComprarLibroComponent
   ResenyasLibroComponent
```

## EJERCICIO 2 – Añadir una reseña al array

1. Abre InfoLibroPage.jsx del proyecto:
   resenayLibro-Componetizada

2. Localiza el array de reseñas (por ejemplo "reseñas" o similar)
   que luego se pasa como prop a ResenyasLibroComponent.

3. Añade una reseña nueva al final del array. Ejemplo:

```
   {
     name: "",
     review: "",
     created_at: ""
   }
```

4. Guarda y comprueba en el navegador que aparece una reseña más
   en la lista de ResenyasLibroComponent.

## EJERCICIO 3 – Contar reseñas y mostrar el número total

1. En InfoLibroPage.jsx (resenayLibroProps), justo después
   de definir el array de reseñas, crea una constante:

   `const numeroResenyas`  
   y asignale al valor del tamaño dela rray de reseñas.

2. Cuando uses ResenyasLibroComponent, pásale esta nueva prop:

```
   <ResenyasLibroComponent
     reseñas={reseñas}
     numeroResenyas={numeroResenyas}
   />
```

3. En ResenyasLibroComponent.jsx:

   - Modifica la definición del componente para recibir también
     numeroResenyas.
   - Muestra un texto antes de la lista, por ejemplo:

     `"Total de reseñas: X"`

     donde X será el valor de numeroResenyas.

## EJERCICIO 4 – Título de sección configurable por props

1. En InfoLibroPage.jsx (resenayLibroProps), cuando llames
   a ResenyasLibroComponent, añade una nueva prop, por ejemplo:

   `tituloSeccion="Opiniones de los lectores"`

   Ejemplo de uso:

```
   <ResenyasLibroComponent
     reseñas={reseñas}
     numeroResenyas={numeroResenyas}
     tituloSeccion="Opiniones de los lectores"
   />
```

2. En ResenyasLibroComponent.jsx:

   - Añade tituloSeccion en la desestructuración de props.
   - Sustituye el h2 fijo (por ejemplo "Reseñas") por:

     `<h2>{tituloSeccion}</h2>`

## EJERCICIO 5 – Crear un componente TarjetaResenya

1. Crea un archivo `TarjetaResenyaComponent.jsx`
   en la misma carpeta de componentes que ResenyasLibroComponent.

2. Define el componente TarjetaResenyaComponent para que reciba
   una reseña por props:

   - Nombre de la prop sugerido: "reseña" o "resenya".
   - Dentro, muestra:
     - El autor en un h3.
     - El texto de la reseña en un p.

3. En ResenyasLibroComponent.jsx, en vez de escribir el JSX
   de cada reseña directamente dentro del .map(), haz:

   - Importa TarjetaResenyaComponent.
   - En el .map, para cada r (reseña) devuelve:

     `<TarjetaResenyaComponent reseña={r} />`

   - Añade también `key={r.id}` en ese componente.

## EJERCICIO 6 – Mostrar el índice de reseña

1. En ResenyasLibroComponent.jsx, modifica el .map() así:

   `reseñas.map((r, index) => { ... })`

2. En vez de pasar solo `reseña={r}` a TarjetaResenyaComponent,
   pásale también una prop nueva "numero" con el valor index + 1.

3. En TarjetaResenyaComponent.jsx, muestra el número de reseña
   en el h3. Por ejemplo:

   `"Reseña #X – Autor"`

   donde X será el número recibido en la prop numero.

## EJERCICIO 7 – Extraer un componente TiendaLibro

1. Localiza en DondeComprarLibroComponent (o similar) el array
   donde se listan las tiendas o enlaces para comprar el libro.

2. Crea un componente TiendaLibroComponent.jsx que reciba una prop
   "tienda" con la información de una tienda concreta.

   Dentro, muestra algo como:

   - Nombre de la tienda en negrita.
   - La direccion al lado.

3. En DondeComprarLibroComponent.jsx:

   - Importa TiendaLibroComponent.
   - Dentro del .map que recorre las tiendas, en vez de escribir
     el JSX manual, usa:

     `<TiendaLibroComponent tienda={t} />`

     y añade una key (por ejemplo `key={t.id}` si existe id).

4. Comprueba que el resultado visual es el mismo, pero con la lógica
   delegada a TiendaLibroComponent.

## EJERCICIO 8 – Prop “destacado” en recomendaciones

1. Localiza el array de recomendaciones de libros (por ejemplo,
   en RecomendacionesComponent o en InfoLibroPage para ese bloque).

2. Añade un campo "destacado" (true/false) en al menos uno de los
   objetos de recomendación, por ejemplo:

   `destacado: true`

3. Crea (si no existe) un componente hijo TarjetaRecomendacionComponent.jsx
   que reciba una recomendación como prop.

   Dentro, muestra:

   - El título del libro recomendado.
   - Algún texto breve.

4. En TarjetaRecomendacionComponent, añade un renderizado condicional:

   - Si recomendacion.destacado es true, muestra un texto especial,
     por ejemplo: "Recomendación destacada".

5. En el componente padre (RecomendacionesComponent), en el .map
   de recomendaciones, usa TarjetaRecomendacionComponent y pasa
   cada recomendación como prop.

## EJERCICIO 9 – Sección “Resumen del libro” con props

1. En InfoLibroPage.jsx de resenayLibroProps, define un objeto
   resumenLibro con datos inventados, por ejemplo:

```
   const resumenLibro = {
     titulo: 'Mi libro de React',
     autor: 'Alejandro García',
     anio: 2024,
     paginas: 320,
     genero: 'Tecnología'
   }
```

2. Crea un nuevo componente ResumenLibroComponent.jsx
   en la carpeta de componentes.

   Opciones para las props:
   A) Pasar el objeto entero:
   `<ResumenLibroComponent resumen={resumenLibro} />`

   y dentro:
   `const ResumenLibroComponent = ({ resumen }) => { ... }`

   B) Pasar las propiedades sueltas:

   ```
   <ResumenLibroComponent
       titulo={resumenLibro.titulo}
       autor={resumenLibro.autor}
       anio={resumenLibro.anio}
       paginas={resumenLibro.paginas}
       genero={resumenLibro.genero}
     />
   ```

   y dentro:

   ```
   const ResumenLibroComponent = ({ titulo, autor, anio, paginas, genero }) => { ... }
   ```

3. Dentro de ResumenLibroComponent muestra:

   - Un h2 con el título del libro.
   - Un párrafo con el autor y el año.
   - Un párrafo con el número de páginas.
   - Un párrafo con el género.

4. En InfoLibroPage.jsx, coloca ResumenLibroComponent en un lugar lógico,
   por ejemplo:
   - Debajo de InfoLibroComponent.
   - Antes de la sección de reseñas.
