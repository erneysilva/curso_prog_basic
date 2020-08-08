var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 30;
var xi = 0; //constante
var yi = 0;
var xf = 10; 
var yf = 300; // constante
var colorcito = "#FAA";

for (l=0; l<lineas; l++)
{
    dibujarlinea(colorcito, xi, yi, xf,yf );
    yi = yi + 10;
    xf = xf + 10;
}

dibujarlinea(colorcito,1,1,1,300);
dibujarlinea(colorcito,1,300,299,299);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
