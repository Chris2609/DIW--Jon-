window.onload=function(){
    var miCanvas = document.getElementById("lienzo");  
    var ctx= miCanvas.getContext("2d");  
    var grad=ctx.createRadialGradient(400,100,30,90,50,400);
    grad.addColorStop(0,'white');  
    grad.addColorStop(1,'rgb(195,215,235)');
    //relleno del cuadrado
    // ctx.fillStyle='lightblue'
    ctx.fillStyle=grad;
    ctx.fillRect(0,0,500,500); 

   // borde del cuadrado
   ctx.lineWidth=9;
   ctx.strokeStyle='#0B0D6E';
   ctx.strokeRect(0,0,500,500)
   ctx.stroke();

   //comenzar a dibujar
   ctx.beginPath();
   ctx.moveTo(0,200);

   //coordenadas
   ctx.lineTo(100,100);
// ctx.lineTo(100,100);
    ctx.lineTo(300,300);
    ctx.lineTo(400,200);
    ctx.lineTo(500,300);
    ctx.lineTo(500,500);
    ctx.lineTo(0,500);
    ctx.lineTo(0,500);


   //estilo y línea
   ctx.lineWidth=5;
    ctx.strokeStyle='#FAC77F';
    ctx.stroke();

    //relleno
    ctx.fillStyle='#AD8A58';
    ctx.fill();
//sol
    ctx.beginPath();
    ctx.arc(400,100,30,0,2*Math.PI);

    //rellenamos el sol
    ctx.fillStyle='yellow';
    ctx.fill();

    // //borde al círculo
    // ctx.lineWidth=5;
    // ctx.strokeStyle='#C1FF25';
    // ctx.stroke();
 


    //arbol curva cuadrática
    ctx.beginPath();
    ctx.moveTo(40,440);
    ctx.quadraticCurveTo(60,280,75,440);
    ctx.fillStyle='green';
    ctx.fill();

   // TRONCO
    ctx.beginPath();
    ctx.fillStyle='#752E05';
    ctx.fillRect(53,500,8,-62);
    ctx.fill()

//Curvas de bezier
    ctx.beginPath();
    ctx.moveTo(110,440);
    ctx.bezierCurveTo(130,320,175,320,190,440);
    ctx.fillStyle='green';
    ctx.fill();

 // TRONCO
 ctx.beginPath();
 ctx.fillStyle='#752E05';
 ctx.fillRect(145,500,12,-62);
 ctx.fill()

 //elipses
    ctx.beginPath();
    ctx.ellipse(420,478,40,20,Math.PI/1,0,2*Math.PI);
    ctx.strokeStyle='darkgray';
    ctx.stroke();



    ctx.fillStyle='gray'
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(478,458,40,20,Math.PI/2,0,2*Math.PI);
    let luz=ctx.createLinearGradient(430,450,500,500);
    luz.addColorStop(0,'gray');
    luz.addColorStop(1,'black');
    ctx.fillStyle=luz;
    // ctx.strokeStyle='darkgray';
    // ctx.stroke();
    // ctx.fillStyle='gray'
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(430,458,40,20,Math.PI/1.5,0,2*Math.PI);
    let gradient=ctx.createLinearGradient(410,440,460,490);
    gradient.addColorStop(0,'gray');
    gradient.addColorStop(1,'black');
    ctx.fillStyle=gradient;
    // ctx.strokeStyle='darkgray';
    // ctx.stroke();
    // ctx.fillStyle='gray'
    ctx.fill();
}