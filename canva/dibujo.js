var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var l = 0;


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var xxx = parseInt(texto.value);
    var lineas = xxx;
    var xi = 0; //constante
    var yi = 0;
    var xf = 10; 
    var yf = 300; // constante
    var colorcito = "#FAA";
    var espacio = ancho/lineas;
    
    for (l=0; l<lineas; l++)
    {
        dibujarlinea(colorcito, xi, yi, xf,yf );
        yi = yi + espacio;
        xf = xf + espacio;
    }
    
    dibujarlinea(colorcito,1,1,1,300);
    dibujarlinea(colorcito,1,300,299,299);
       
}
