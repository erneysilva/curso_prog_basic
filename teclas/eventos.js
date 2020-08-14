var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

//function dibujarTeclado(evento)
//{
  //if(evento.keyCode == teclas.UP)
  //{
    // console.log("Arriba");
  //}

  //if(evento.keyCode == teclas.DOWN)
  //{
    // console.log("Abajo");
  //}

  //if(evento.keyCode == teclas.LEFT)
  //{
    // console.log("Izquierda");
  //}

  //if(evento.keyCode == teclas.RIGHT)
  //{
    // console.log("Derecha");
  //}
//}

function dibujarTeclado(evento) // Otra forma de hacer varios IF mas resumida se usa switch
{
  switch(evento.keyCode)
  {
    case teclas.UP:
        console.log('Arriba');
    break;

    case teclas.DOWN:
        console.log('Abajo');
    break;

    case teclas.LEFT:
        console.log('Izquierda');
    break;

    case teclas.RIGHT:
        console.log('Derecha');
    break;

    default:
        console.log('otra tecla');
    }

}