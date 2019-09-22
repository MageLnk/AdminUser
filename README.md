Este proyecto fue hecho a petición de evaluar ciertas competencias personales, en la cual la solicitud fue crear una base de datos en MySQL, gestionarla con nodeJS y hacer un interfaz con React para poder hacer un panel de control de ticket para un administrador, que detecte si el usuario qe se conectó es admin o usuario. Los usuarios puedan ver los tickets asignados, y finalmente el administrador tenga el CRUD para gestionar los tickets. 


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

Posterior a eso, cree una base de datos llamada "apitickets" y cree tres tablas conectadas en dicha base de datos, llamadas: 
- `ticket`
- `tipo_usuarios`
- `usuarios`

La base de datos fue creada por la interfaz de XAMPP, y hay un archivo llamadl `data.sql` que tiene el código de toda la base de datos que importé desde el mismo programa.

Todo lo escrito acá, la aplicación web lo hace. Espero en un futuro, si el tiempo me lo permite, agregarle más operaciones.

Atte.

Gabriel López