/*nodemon server -e js,hbs,html,css*/
/*Lo de arriba sirve para decirle a nodemon que escuche todos los tipos de archivos que yo deseo
*que vea, esto sirve por si quiero hacer cambios, crear nuevos archivos, etc y los tipos de
*archivos tienen que ser como los puse arriba, sin espacios ni nada y se escribe en la terminal
*claramente.*/

const express = require('express');//Para traer lo de express.
const app = express();//Sólo para usar express de manera mas sencilla en el programa.
const hbs= require('hbs');//Para traer lo de hbs.

require('./hbshelpers/helpers.js');

const port= process.env.PORT || 3000;//Antes del || obtengo el puerto si no se corre de manera local y el 3000 es para manera local.

/*Middleware es una instruccion o callback se ejecutara siempre sin importar
*el url que la persona pida.*/

app.use(express.static(__dirname+"/publico"));

//Express HBS engine.
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs')//Lo que está escrito aquí no se debe de cambiar.



/*Se documenta lo de abajo porque si ocupo la línea de arriba puede ser que
*exista un conflicto y se muestre lo de abajo o lo de arriba pero jamás los
*2 al mismo tiempo por eso se documenta lo de arriba.*/

app.get('/', (req, res) =>
{

  res.render('home',
  {
    nombre: 'dieGo',
    anio: new Date().getFullYear()//Para sacar la fecha de manera automática del sistema.
  });
});


app.get('/about', (req, res) =>  /*diagonal about es porque eso es lo que debe de aparecer en la barra de navegación.*/
{

  res.render('about', /*En comillas simples la página que deseo renderisar.*/
  {
    nombre: 'Diego',
    anio: new Date().getFullYear()//Para sacar la fecha de manera automática del sistema.
  });
});
app.listen(port, () =>
{
  console.log(`Escuchando peticiones en el puerto ${port}`);
})

/*Para que heroku pueda ejecutar en el package.json se debe de
*escribir en la parte de scripts un comando que diga específicamente
*start y después poner el comando que se pondría en la terminal Para*ejecutar algo de node, como node app.js y así.
*Para iniciarlo se escribe en terminal npm start*/

/*hay un comando especial en nodemon y para ejecutar ese comando que se escribió en el package.json se debe
*escribir en terminal lo siguiente npm run nodemon*/




//Para probar resultados escribir en una pestaña de html
//lo siguuente  http://localhost:3000/home.html y también sin el home
