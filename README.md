# telecom-digitalers-final 
utiliza cookies para el logueo, la guarda con el nombre "tokenyonathangarcia", si bien no pude completar el front, el back funciona completo, desde la carga de entradas para el blog, contacto, gestion de usuarios, en el token de la cookie se guarda el rol del usuario y el token de validacion, los cuales luego son verificados para permitir el acceso a las rutas segun sea "user" o "admin" 

el deploy del back en render  
https://digitalers-back.onrender.com/  

el back tiene tres rutas principales, /login de acceso general, /admin y /users (con s final!)  
las rutas de inicio de sesion son  
https://digitalers-back.onrender.com/login/login  
https://digitalers-back.onrender.com/login/logout  

para las otras dos rutas se valida el usuario.rol del token guardado en la cookie y el token mismo, en postman se carga automatico, asi que no deberia haber problema  
las rutas de los usuarios de rol "user" es "/users" e incorpora /contact entre otras  

las rutas de admin verifican tambien el rol y el token, teniendo las rutas:  
'/deleteuser/:id' '/updateuser/:id' '/blog' '/blog/:id' '/store' '/store/:id', en sus respectivos GET POST y PUT segun sea necesario la carga, actualizacion o borrado de los datos. 
quedando: "https://digitalers-back.onrender.com/admin/deleteuser/:id"  

muchas gracias por todo!!! ;D  
