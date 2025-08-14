//Arreglo global para guardar nombres
let arregloAmigos = [];

/*
Funcion que obtiene el valor del input evalua si es vacio 
y de ser valido lo agrega al arreglo 
*/
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (!nombreAmigo == "") {
    arregloAmigos.push(nombreAmigo);
    document.getElementById("listaAmigos").innerHTML =
      recorrerLista(arregloAmigos);
    document.getElementById("amigo").value = "";
  } else {
    alert("El campo no puede ser vacio");
  }
}

/*
Funcion que actualiza el Doom
*/
function recorrerLista(arregloAmigos) {
  let amigostxt = "";
  for (i = 0; i < arregloAmigos.length; i++) {
    amigostxt = amigostxt + `<li>${arregloAmigos[i]}</li>`;
  }
  return amigostxt;
}

/** 
 Generar numero aleatorio en el rango del arreglo
*/
function sortearAmigo() {
  
  let numeroAleatoreo = Math.floor(Math.random() * arregloAmigos.length);
  let amigoSecreto = arregloAmigos[numeroAleatoreo];
  document.getElementById("resultado").innerHTML = `<li>${amigoSecreto}</li>`;
}
