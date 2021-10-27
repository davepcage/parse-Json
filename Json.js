document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "
  cadenaFinal= ""
  cadena = Object.entries(JSON.parse(document.getElementById("start").value))
  contador = cadena.length
  document.getElementById("count").innerHTML +=  "object[" + contador + "]<br>";
  for (var i = 0; i < contador; i++) {
    c = cadena[i]
       cadenaFinal += "<code style='color: blue;'>" + c[0]+" </code>:  <code>" +  c[1] +" </code><br>";
  }
    document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal + "}"
});