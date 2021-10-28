document.getElementById("convert").addEventListener("click", function(){
  document.getElementById("count").innerHTML = " "
  document.getElementById("result").innerHTML = " "
  cadenaFinal= ""
  convertToArray = Object.entries(JSON.parse(document.getElementById("start").value))
  contador = convertToArray.length
  document.getElementById("count").innerHTML +=  "object[" + contador + "]<br>";
  for (var i = 0; i < contador; i++) {
    array = convertToArray[i]
    
    if (typeof(array[1]) == "string") {
      formatColor = "<code style = 'color:red'>" + array[1] + "</code>"
    }else if(typeof(array[1]) == "number"){
      formatColor = "<code style = 'color:orange'>" + array[1] + "</code>"
    }else if (array[1] == null) {
      formatColor = "<code style = 'color:pink'>" + array[1] + "</code>"
    }else{
      subColor = ""
      for (var e = 0;e < array[1].length; e++){
        array[1][e]
        if (e == array[1].length-1) {
          subColor += "<code style = 'color:green'>" + "<br>"+ array[1][e] + "</code>"
        }else{
          subColor += "<code style = 'color:green'>" + "<br>"+ array[1][e] + ",</code>" 
        }
      }
      formatColor = "["+ subColor + "<br>]"
    }
    if (i == contador-1) {
      cadenaFinal += "<code style='color: blue;'>" + array[0]+" </code>: " +  formatColor +" <br>";
    }else{
      cadenaFinal += "<code style='color: blue;'>" + array[0]+" </code>: " +  formatColor +", <br>";
    }
  }
  document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal + "}"
});