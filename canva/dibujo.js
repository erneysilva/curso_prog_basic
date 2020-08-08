var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 30;
var xi = 0; 
var yi = 0;//constante
var xf = 300; // constante
var yf = 10; 
var colorcito = "#FAA";

for (l=0; l<lineas; l++)
{
    dibujarlinea(colorcito, xi, yi, xf,yf );
    xi = xi + 10;
    yf = yf + 10;
}

dibujarlinea(colorcito,1,1,300,1);
dibujarlinea(colorcito,300,1,299,299);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
