document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "

  cadenaFinal = document.getElementById("start").value.split(",").length
  document.getElementById("count").innerHTML +=  "object[" + cadenaFinal + "]";
  
  const cadena1 = document.getElementById("start").value.split(",");
  for (var i = 0 ; i <= cadena1.length-1; i++) {
    cadena = cadena1[i]
    document.getElementById("result").innerHTML += "<div>" + cadena +"</div>";
  }

});
