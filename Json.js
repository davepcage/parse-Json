document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "

  cadenaFinal = document.getElementById("start").value.split(",").length
  document.getElementById("count").innerHTML +=  "object[" + cadenaFinal + "]";
  caracteres = document.getElementById("start").length
  const cadena1 = document.getElementById("start").value.slice(1,caracteres).split(",")
  console.log(cadena1)
  for (var i = 0 ; i <= cadena1.length-1; i++) {
    cadena = cadena1[i].split(":")
    document.getElementById("result").innerHTML += "<code style='color: blue;'>" + cadena[0] +" </code> : <code>" + cadena[1] +" </code><br>";
  }
});