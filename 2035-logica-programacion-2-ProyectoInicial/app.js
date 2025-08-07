let intento=1;
let intentosTotales=5;
let numGenerado=Math.round((Math.random()*10)+1);
alert(numGenerado);
//boton reinicio
let botonReinicio=document.getElementById("reiniciar");

//boton intentar 
let botonIntentar=document.getElementById("intentar");

botonIntentar.addEventListener("click",()=>{

    if(((intentosTotales-intento) > 0 &&intento<=intentosTotales) ){

let entradaUsuario = document.getElementById("entrada");
let numeroIngresado=entradaUsuario.value;
validarNumero(numeroIngresado,numGenerado,intentosTotales);

entradaUsuario.value="";


    }else{
         texto("p","Preciona el boton de reinicio para volver ajugar");
         botonReinicio.removeAttribute('disabled');
    }
  
});




botonReinicio.addEventListener("click",()=>{
intento=1;
numGenerado=Math.round((Math.random()*10)+1);
texto("p","Ingresa un numero en un rango del 1 al 10");
alert(numGenerado);
entradaUsuario.value="";
botonReinicio.setAttribute('disabled',true);
});

//funciones

//funcion para validar el numero de uswuario 
function validarNumero(numeroIngresado,numGenerado,intentosTotales){

    if(numGenerado==numeroIngresado){
       
        texto("p",`Felicidades acertaste en ${intento==1?`${intento}vez`:`${intento} veces`}`);
        botonReinicio.removeAttribute('disabled');
    intento=6;
    }else if(numGenerado>numeroIngresado){
      texto("p",`Incorrecto dame un numero mas grande, te quedan ${(intentosTotales-intento)==1?`1 intento`:`${intentosTotales-intento} intentos`} `);
       intento++;
        botonReinicio.setAttribute('disabled',true);
    }else {
        texto("p",`Incorrecto dame un numero mas pequeño, te quedan ${(intentosTotales-intento)==1?`1 intento`:`${intentosTotales-intento} intentos`}`);
          intento++;
           botonReinicio.setAttribute('disabled',true);
    }
  

}


//funcion para refactorizar el texto
function texto(elemento,descripcion){
let elementoHTML=document.querySelector(elemento);
elementoHTML.innerHTML=descripcion;
}

texto("h1","Juego del numero secreto");
texto("p","Ingresa un numero en un rango del 1 al 10");