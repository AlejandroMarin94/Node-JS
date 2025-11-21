## ¿Qué es una API REST en Node.js?

Es una API construida usando Node.js (motor JS en servidor) y normalmente Express.  
Permite crear endpoints que reciben peticiones y devuelven respuestas en formato JSON.

## ¿Qué debe tener una API REST moderna en Node.js?

- Servidor con Express para gestionar rutas.
- Endpoints bien definidos siguiendo el estándar REST:
  - GET → Obtener datos
  - POST → Crear datos
  - PUT → Reemplazar datos
  - PATCH → Actualizar parcialmente datos
  - DELETE → Eliminar datos
- Uso de JSON como formato de intercambio de información.
- Manejo de errores con códigos HTTP correctos (200, 201, 400, 404, 500…).
- Middleware para:
  - Parsear JSON: express.json()
  - Seguridad: CORS, autenticación, validaciones...
  - Logs / control de peticiones
- Conexión a una base de datos (MongoDB + Mongoose).
- Modelos (Schemas) para validar la forma de los datos.
- Controladores que separan la lógica de negocio.
- Sistema de autenticación (JWT, sesiones o tokens).
- Documentación mínima de endpoints (Swagger o README).
- Estructura organizada:
  - /routes
  - /controllers
  - /models
  - /middlewares
  - /config

## Resumen final:

Una API REST en Node.js es un servidor Express que expone endpoints estructurados, usa JSON para enviar/recibir datos, respeta los métodos HTTP, valida la información maneja errores y se conecta a una base de datos.
