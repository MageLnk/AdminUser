Este proyecto fue hecho a petición de GePro para una prueba técnica, en la cual la solicitud fue una petición de hacer una aplicación web que almacene una actividad Todo, la guarde y traiga a través de una API. 

Decidí hacerlo en React, con una API creada en NodeJS conectada a una base de datos en MySQL.

Hay funcionalidades demás que el ejercició original en si no solicitó, pero los agregué igual en caso de una posible mejora a futuro en este mismo ejercicio por mi parte.

## INSTRUCCIONES
----------- Primero

Abrir una consola y dirigirse a la ruta './Front' y ejecutar dos comandos.

### 'npm install'

Y luego

### 'npm start'

Con eso, el front basado en REACT estará funcionando. 

----------- Segundo

En otra consola, dirigirse a la ruta './Back' y ejecutar dos comandos.

### 'npm install'

Y luego

### 'npm start'

Con eso, el backend basando en NodeJS estará funcionando de forma local.

----------- Tercero

De forma local, lo que yo hice fue instalar el programa XAMPP, emulé una base de datos en MySQL.

Posterior a eso, cree una base de datos llamada "apitodosql" y cree dos tablas independientes en dicha base de datos, llamadas: 
- `users`
- `usuariotodo`

La tabla llamada "users" está de forma genérica, para poder crear un perfil y un usuario asociado a este todo, en un hipotético upgrade del sitio.

La tabla "usuariotodo" es la tabla hecha para el ejercicio en si.