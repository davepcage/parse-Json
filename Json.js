document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "
  cadenaFinal= ""
  cadena = document.getElementById("start").value
  contador = cadena.split(",").length
  document.getElementById("count").innerHTML +=  "object[" + contador + "]";
  caracteres = cadena.length
  const cadena1 = cadena.slice(1,caracteres-1).split(",")
  console.log(cadena1)
  for (var i = 0 ; i <= cadena1.length-1; i++) {
    resultado = cadena1[i].split(":")
    cadenaFinal += ("<code style='color: blue;'>" + resultado[0] +" </code> : <code>" + resultado[1] +" </code><br>");
  }
  document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal + "}"

});