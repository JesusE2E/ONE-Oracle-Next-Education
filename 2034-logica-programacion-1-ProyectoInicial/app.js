
let numsecreto=55;
let numero;


while(numero !=numsecreto){
numero=prompt("Dame un numero haber si adivinas el numero secreto");
if(numero==numsecreto){
alert(`adivinaste el ${numero}`);
}
else if(numsecreto<numero){
alert('da un numero mas pequeño');
}else{
alert('da un numero mas grande');

}

}
