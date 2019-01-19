const http= require("http");

//Esto recibe un callback
http.createServer( (req, res) =>
{

  res.writeHead(200, {"Content-type": "application/json"});//status 200 que se hace correctamente. Sirve para mandar un json.

  let salida=
  {
    nombre: "Diego",
    edad: 22,
    url: req.url
  }

  res.write(JSON.stringify(salida));
  //res.write("Hola mundo.");
  res.end();//Necesario para que funcionen mis res.write.
})
.listen(8080);//Esto es para decirle el puerto que yo deseo que escuche usualmenta va en puerto 3000 o puerto 8080 si se usa de manera local.
/*Recibe request´s y/o solicitudes junto con las respuestas que el servidor
va a enviar.*/

console.log("Escuchando el puerto 8080");
