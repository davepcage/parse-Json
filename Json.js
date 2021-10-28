document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "
  cadenaFinal= ""
  convertToArray = Object.entries(JSON.parse(document.getElementById("start").value))
  contador = convertToArray.length
  document.getElementById("count").innerHTML +=  "object[" + contador + "]<br>";
  for (var i = 0; i < contador; i++) {
    c = convertToArray[i]
    
    if (typeof(c[1]) == "string") {
      c1 = "<code style = 'color:red'>" + c[1] + "</code>"
    }else if(typeof(c[1]) == "number"){
       c1 = "<code style = 'color:orange'>" + c[1] + "</code>"
    }else{
      if (c[1] != null) {
        list = c[1]
        console.log(list)
        c1 = "<code style = 'color:green'>" + c[1] + "</code>"

      }else{
       c1 = "<code style = 'color:pink'>" + c[1] + "</code>"
      }
    }

       cadenaFinal += "<code style='color: blue;'>" + c[0]+" </code>: " +  c1 +" <br>";
  
  }
    document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal + "}"
});