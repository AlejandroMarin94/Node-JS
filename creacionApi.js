/*
## Guia para la creación de mi servidor básico

### 1.Inicializamos nuestro proyecto

`npm init -y` - Este comando nos creará el archivo package.json

### 2. Instalamos librerías a usar

`npm i express cors` - Para instalar express y cors  
`npm i -D nodemon` - Para instalar nodemon como desarrollo

### 3. Editamos package.json

```
{
  "name": "Nombre_Proyecto",
  "version": "1.0.0",
  "description": "Descripción_Proyecto",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js", - Creamos este script para ejecutar nuestro proyecto con nodemon
    "start": "node index.js" - Creamos este script para ejecutar nuestro proyecto con node
  },
  "keywords": [],
  "author": "Autor_Proyecto",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

### 4. Creamos nuestro archivo .js de arranque.

```
// Inicializamos express y cors(*)
const express = require("express");

// Para poder manejar las solicitudes CORS, usamos la libreria
const cors = require("cors");

//  Ejemplo importacion archivo que simula BBDD Mockeada (Si se necesita)
const { usuarios } = require("./bbddMockeada/dataUsers");

// Creamos aplicacion con express (server como servidor que creamos)(*)
const server = express();

// Middleware para que analize JSON de las solicitudes(*)
server.use(express.json());

// Configuramos parametrización de CORS(*)
server.use(
    cors({
        origin:"http://localhost:5173", // Url o IP permitida
        methods: ["GET", "POST", "OPTIONS"], // Métodos fetch permitidos
        allowedHeaders: ["Content-Type"], // Cabeceras permitidas
    }));

// RUTAS
// Aqui irían las rutas
// EJ: server.get("/",(req, res) => {res.send("Hola, mundo!")})

// Puerto a usar en mi server(*)
const PORT = 3000;

// Aqui es donde lanzo el server escuchando en ese puerto(*)
// Esto va lo último. Es donde inicializa en standBy el servidor llamado app
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### 5. Ejecutamos nuestro servidor

`npm run dev` - Para ejecutar nuestro servidor con nodemon y que se rearme cada vez que detecte un cambio  
`npm run start` - Para ejecutar nuetro servidor de forma estándar con Node

## Ampliación para usar MVC, Mongo y variablers de entorno

`npm install dotenv mongoose` - Para instalar mongoose y dotenv.  
Además, configuraremos ya rutas en nuestro proyecto siguiendo una logica de modulos:

```
src/
  |- controllers/
  |- models/
  |- routers/
index.js
package.json
```

### A. Variables de entorno

Creamos un archivo llamado `.env` en el directorio raiz.  
Ahí colocamos las variables que vayamos ausar en el codigo o valores sensibles.  
Necesitamos incroporar al ìnicio del archivo js raiz de nuestro proyecto lo siguiente:
`require("dotenv").config();`  
Dado un arvhico .env de ejemplo como este:

```
PORT=3000
URL_MONGO=mongodb://localhost:27017/Tienda
```

Para cargar ese puerto del env hacemos `process.env.PORT`

### B. Conexión a MongoDB

Siguiendo el modelo MVC, creamos una carpeta dentro de src llamada `db` y dentro de ella creamos un script de conexión (PE: `connectDb.js`)  
Un ejemplo de script de conexión sería:

```
const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        const URL_MONGO = process.env.URL_MONGO;
        await mongoose.connect(URL_MONGO);
        console.log("Conexión a la BBDD realizada con exito");
    } catch (error) {
        console.log("Error al conectar a la bbdd de MongoDB", error);
    }
};

module.exports = connectToDatabase;
```

Donde obtenenoms la URL de conexión de las variables de entorno y, a continuación, realizamos al conexión.  
Al ser llamada asincrona, con fucniona sincrona y await, en bloque try catch para controlar posible error de conexión.

Ahora tendríamos una estructura parecida a esta:

```
src/
  |- controllers/
      |-userController.js
      | ...
  |- db/
      |- connectDb.js
  |- models/
      |- userModel.js
      | ...
  |- routers/
      |- userRouter.js
      | ...
.env
index.js
package.json
```

### C. Encriptación de contraseñas con Bcrypt

`npm install bcrypt` - Para instalar bcrypt  
`bcrypt` es la libreria que suaremos para contruir el hash o ecnriptación de la contraseña.  
Para usarla instanciaremos la librería con `const bcrypt = require("bcrypt")`  
Se realiza de forma asincrona usando await y a través de dos comandos:

- Encriptación: `const criptedPassword = await bcrypt.hash(passwordSinEncriptar, Bcrytp_rounds)`, donde Bcrypt_rounds es un valor que se suele fijar en 10 o 12.
- Comparación: `const isValidPassword = await bcrypt.compare(passwordSinEncriptar, criptedPassword)`, donde es `true` si coinciden.

Se usa para registros con contraseñas, y así almacenamos la contraseña encripotada en la BBDD.

### D. Generación de tokens con JsonWebToken

`npm install jsonwebtoken`- Para instalar jsonwebtoken  
`jsonwebtoken` es la librería que usaremos para realizar conexiones autenticadas y poder manejar tokens.  
Para usarla, a la hora de generar los token, deberemos importar la librería con `const jwt = require("jsonwebtoken")`  
Su uso se compoen de dos fases:

1. Generación del token: `jwt.sign(payload, process.env.SECRET_TOKEN, {expiresIn: "180min"})`
2. Verificacion de token: `const payload = jwt.verify(token, process.env.SECRET_TOKEN);`

Donde `payload` será un obejto que contruyamos con datos que nos interese tener en el token. Por ejemplo, id del usuario, su rol, su nombre...  
`const payload = {_id_: "", name: "", role: ""}`,  
y `SECRET_TOKEN`, un hash que usaremos para codificar ese token.

Dichon has podemos crearlo usando `crypto` a través del siguiente script:

```
const crypto = require("crypto");

const secret = "Full Stack 18";
let secret2 = "Actualizo con más seguridad";

for(let i = 1; i <= 2; i++){
    if( i === 2 ) secret2 = "Actualizo con aún más seguridad para TOKEN DE REFRESCO";
    const hash = crypto.createHmac("sha256",secret).update(secret2).digest("hex");
    console.log(`Hash${i}:`, hash);
}
```

La estructura que tendríamos de nuestra ApiREST sería algo parecido a esto:

```
src/
  |- controllers/
      |-userController.js
      | ...
  |- db/
      |- connectDb.js
  |- middlewares/
      |- auth.js
  |- models/
      |- userModel.js
      | ...
  |- routers/
      |- userRouter.js
      | ...
  |- utils/
      |- authToken.js
      | ...
.env
index.js
package.json
```

### EXTRA. Nodemailer

`npm install nodemailer`  
Es una librería que usaremos para enviar email desde nuestro backend.  
Para ello, crearemos una nueva carpeta en nuestro src, llamada services, y dentro crearemos un script llamado `emailServices.js`.
Como siempre, lo primero será instanciar la librería: `const nodemailer = require("nodemailer")`.  
El script será algo similar a esto:

```
const nodemailer = require("nodemailer");

const emailConfig = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "user_email",
        pass: "application_pass"
    },
    tls: {
        rejectUnauthorized: false
    }
});


const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: "user_email",
      to: to,
      subject: subject,
      html: html,
    };

    await emailConfig.sendMail(mailOptions);
  } catch (error) {
    console.log("ha fallado el envio", error.message);
  }
};

module.exports = { sendEmail };
```

Para realizar envío, deberemos llamar a `sendEmail()` pasándole los parámetros `to, subject y html`

*/