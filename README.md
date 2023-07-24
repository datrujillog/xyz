# Nombre del Proyecto

<br>

## Datos del Presentación

- **Nombre:** Diego Alonso Trujillo Galeano
- **Fecha:** 2023-07-24
- **Proyecto:** Prueba Tecnica - Backend

## Objetivos del Proyecto

- Crear un API REST con NodeJS y Express
- Crear productos, actualizarlos y eliminarlos
- llevar el inventario de cuantos productos hay en stock y cuantos se han vendido
- Conocer cuales son los clientes que mas compran
- Manejar los tiempos de entrega de los productos por sus operarios
- Conocer la puntacion de sus productos segun sus clientes.
- Ver las estadisticas de sus productos

## Descripción del Proyecto

- El proyecto consiste en crear un API REST con NodeJS y Express, para la gestion de productos, clientes, operarios, ventas, estadisticas y puntaciones de los productos.

## Tecnologías usadas

- NodeJS
- Express
- MySQL
- Sequelize/ORM
- supertest
- jest

## Instalación

- Clonar el repositorio
- Ejecute el comando  ` docker-compose up -d ` para iniciar la base de datos mysql y adminer
- Ejecutar el comando `npm install` para instalar las dependencias
- Ejecutar el comando `npm run dev` para correr el proyecto
- Ejecutar el comando `npm run test` para correr las pruebas

## Estructura del Proyecto

- **app.js:** Archivo principal del proyecto
- **config:** Configuración de la base de datos
- **services:** Servicios de la aplicación
- **models:** Modelos de la aplicación
- **routes:** Rutas de la aplicación
- **test:** Pruebas de la aplicación

justificar el model de la base de datos

## Modelo de la Base de Datos

- **Relaciones entre entidades:** El modelo de base de datos utilizado permite establecer relaciones entre las diferentes entidades, como Productos, Clientes, Ventas e Inventario. Estas relaciones facilitan la organización de los datos y aseguran la integridad referencial en la base de datos.

- **Escalabilidad y rendimiento:** MySQL es conocido por su rendimiento y escalabilidad. Es capaz de manejar grandes volúmenes de datos y proporciona buenas velocidades de consulta, lo que es esencial para una aplicación que podría manejar una gran cantidad de productos, clientes y transacciones.

- **Amplia comunidad y soporte:** MySQL es una de las bases de datos más populares y ampliamente utilizadas en la comunidad de desarrollo. Como resultado, hay una gran cantidad de recursos disponibles, como documentación, tutoriales, bibliotecas y herramientas, lo que facilita el desarrollo y la resolución de problemas.

- **Facilidad de integración con Node.js:** MySQL se integra bien con Node.js y es compatible con varias bibliotecas y módulos que simplifican el acceso y la manipulación de datos desde la aplicación Node.js.

- **Transacciones y consistencia de datos:** MySQL es una base de datos relacional que admite transacciones, lo que garantiza que las operaciones complejas puedan realizarse de manera segura y que los datos mantengan una consistencia adecuada.

- **Madurez y estabilidad:** MySQL es una base de datos madura y ha sido probada en una amplia variedad de aplicaciones a lo largo del tiempo. Esto proporciona una mayor confiabilidad y estabilidad en comparación con algunas de las bases de datos más nuevas.

- **Costo y licencia:** MySQL es una base de datos de código abierto y es de uso gratuito, lo que puede ser una ventaja significativa para proyectos con restricciones de presupuesto

<br>

- **Productos**:

Almacena la información de los productos industriales que la empresa maneja.
Cada producto tiene un ID único como clave primaria para identificación.
Tiene campos como Nombre y Descripción para describir el producto.
La Puntuación indica la calificación o valoración del producto.
Fecha de creación y Fecha de actualización guardan información sobre cuándo se creó y actualizó el registro del producto.

- **Clientes:**

Contiene los detalles de los clientes de la empresa que realizan compras.
Cada cliente tiene un ID único como clave primaria para identificación.
Los campos Nombre, Dirección, Correo electrónico y Teléfono almacenan los datos de contacto del cliente.

- **Ventas:**

Registra las ventas realizadas por los clientes de productos específicos.
Tiene un ID único como clave primaria para identificación de cada venta.
Contiene claves foráneas hacia las tablas Productos y Clientes, para vincular cada venta con el producto vendido y el cliente que lo compró, respectivamente.
Fecha de venta indica cuándo se realizó la transacción.
Cantidad vendida guarda el número de productos vendidos en esa transacción.

- **Inventario:**

Representa el stock de productos disponibles en la empresa.
Tiene un ID único como clave primaria para identificación de cada registro de inventario.
Contiene una clave foránea hacia la tabla Productos, lo que permite asociar cada registro de inventario con un producto específico.
Cantidad en stock indica la cantidad actual de unidades del producto en el inventario.

- **Operarios:**

Almacena información sobre los operarios que manejan los tiempos de entrega de los productos.
Cada operario tiene un ID único como clave primaria para identificación.
El campo Nombre guarda el nombre del operario.
Tiempo de entrega indica el tiempo que tarda este operario en realizar una entrega, lo que podría ser útil para calcular el tiempo estimado de entrega de un producto.


## Documentación de la API swagger 

- **Documentación de la API:** La documentación de la API se encuentra en el siguiente enlace


- **URL de la API**: http://localhost:5000/api-docs/



