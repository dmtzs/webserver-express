const hbs= require('hbs');

//helpers de hbs.
hbs.registerHelper('getanio', () =>  /*En parentesis es el nombre del helper y despues la función.*/
{
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) =>  /*En parentesis es el nombre del helper y despues la función.*/
{
  let palabras= texto.split(' ');
  palabras.forEach((palabra, idx) => /*Palabra es una variable declarada e idx es una variable que itera en el for.*/
  {
    palabras[idx]= palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toLocaleLowerCase()
    /*checar para que sirve la igualación de charAt, toLocaleUpperCase, etc.*/
  });

  return palabras.join(' ');//Para unir el arreglo de nuevo, checar aún así.
});
