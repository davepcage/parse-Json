document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "
  cadenaFinal= ""
  ConvertToArray = Object.entries(JSON.parse(document.getElementById("start").value))
  contador = ConvertToArray.length
  document.getElementById("count").innerHTML +=  "object[" + contador + "]<br>";
  for (var i = 0; i < contador; i++) {
    c = ConvertToArray[i]
    if (typeof(c[1]) == String) {
      c1 = "<code style = 'color:red'>" + c[1] + "</code>"
    }else if(typeof(c[1]) == Number){
       c1 = "<code style = 'color:orange'>" + c[1] + "</code>"
    }else{
       c1 = "<code style = 'color:yellow'>" + c[1] + "</code>"
    }
       cadenaFinal += "<code style='color: blue;'>" + c[0]+" </code>: " +  c1 +" <br>";
  
  }
    document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal + "}"
});