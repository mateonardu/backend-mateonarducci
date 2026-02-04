# Backend Express + MongoDB + JWT (Arquitectura MVC)

## 📌 Descripción
Este proyecto es un servidor backend desarrollado con **Node.js y Express**, conectado a **MongoDB (Atlas)** mediante **Mongoose**, que implementa **autenticación con JWT** y sigue el patrón de **arquitectura MVC (Modelo–Vista–Controlador)**.

Incluye endpoints públicos para registro y login de usuarios, y una **entidad protegida (Tasks)** asociada al usuario autenticado, con control de acceso mediante middleware.

---

## 🧠 Objetivos del proyecto
- Integrar Express con MongoDB usando Mongoose.
- Aplicar arquitectura MVC de forma modular.
- Implementar autenticación segura con bcrypt y JWT.
- Proteger rutas privadas mediante middleware.
- Manejar errores de forma centralizada.
- Documentar el proyecto correctamente.

---

## 🛠️ Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv
- Thunder Client (testing)

---

## 📁 Estructura del proyecto (MVC)
src/
  config/
    db.js
  models/
    User.js
    Task.js
  services/
    auth.service.js
    task.service.js
  controllers/
    auth.controller.js
    task.controller.js
  routes/
    auth.routes.js
    task.routes.js
  middlewares/
    auth.middleware.js
    error.middleware.js
  utils/
    AppError.js
  app.js
  server.js
.env.example
README.md

## ⚙️ Variables de entorno

El proyecto utiliza variables de entorno para la configuración sensible.
Se debe crear un archivo .env en la raíz del proyecto tomando como referencia .env.example.

Contenido de .env.example:

PORT=3000
MONGO_URI=
JWT_SECRET=
JWT_EXPIRES_IN=1d

## 🔐 Endpoints
## 🔓 Autenticación (públicos)
## Registro de usuario

POST /api/auth/register

Body (JSON):

{
  "email": "usuario@test.com",
  "password": "123456"
}

## Login de usuario

POST /api/auth/login

Body (JSON):

{
  "email": "usuario@test.com",
  "password": "123456"
}


## Respuesta esperada:

{
  "token": "JWT_TOKEN",
  "user": {
    "id": "id_del_usuario",
    "email": "usuario@test.com"
  }
}

## 🔒 Tasks (rutas protegidas)

Todas las rutas requieren el header:

Authorization: Bearer JWT_TOKEN

Listar tareas del usuario autenticado

GET /api/tasks

## Crear una tarea

POST /api/tasks

Body (JSON):

{
  "title": "Mi primera tarea"
}

## Actualizar una tarea

PATCH /api/tasks/:id

Body (JSON):

{
  "completed": true
}

## liminar una tarea
DELETE /api/tasks/:id

## 🛡️ Seguridad y control de acceso
Las contraseñas se almacenan encriptadas utilizando bcrypt.
La autenticación se realiza mediante JSON Web Tokens (JWT).
Las rutas privadas están protegidas por middleware.
Cada tarea está asociada al usuario que la creó.
Un usuario no puede modificar ni eliminar tareas que no le pertenecen.

## 🧪 Pruebas
Las pruebas de los endpoints fueron realizadas utilizando Thunder Client.
Se incluye una colección exportada con ejemplos de requests para facilitar la evaluación.

## 👨‍💻 Autor
Trabajo práctico realizado para la materia Backend / Programación Web.

## ✅ Estado del proyecto
Autenticación con JWT implementada
Rutas públicas y privadas funcionando
Entidad protegida asociada al usuario
Arquitectura MVC aplicada
Manejo de errores centralizado