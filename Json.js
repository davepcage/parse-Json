var array = ""
cadenaFinal = ""
contador = 0
document.getElementById("convert").addEventListener("click", function (){
  document.getElementById("count").innerHTML = " ";
  document.getElementById("result").innerHTML = " ";
  valores = document.getElementById("start").value
  convertToArray = Object.entries(JSON.parse(valores.split(",")))
  contador = convertToArray.length
  printItems(convertToArray);

});
function printItems() {
  for (var i = 0; i < contador; i++) {
    array = convertToArray[i]
    if (typeof(array[1]) == "string") {
      formatColor = "<code style = 'color:red'>" + array[1] + "</code>"
    }else if(typeof(array[1]) == "number"){
      formatColor = "<code style = 'color:green'>" + array[1] + "</code>"
    }else if (array[1] == null) {
      console.log(typeof(array[1]))
      formatColor = "<code style = 'color:orange'>" + array[1] + "</code>"
    }else if (typeof(array[1])) {
      subarray = array[1]
      if (Array.isArray(subarray)) {
        subColor = ""
        for (var e = 0;e < array[1].length; e++){
          array[1][e]
          if (typeof(array[1][e]) == "string") {
            array[1][e] = "<code style = 'color:red'>" + array[1][e] + "</code>"
          }else if (typeof(array[1][e]) == "number") {
            array[1][e] = "<code style = 'color:green'>" + array[1][e] + "</code>"
          }else {
            array[1][e] = "<code style = 'color:pink'>" + array[1][e] + "</code>"
          }

          if (e == array[1].length-1) {
            subColor += "<br>"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + array[1][e];
          }else{
            subColor += "<br>"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" +  array[1][e] + "," 
          }
        }
        formatColor = "["+ subColor + "<br>]"
      }else{
        subCadena= ""
        subarray = Object.entries(subarray)
        for (var j = 0; j < subarray.length; j++) {
          subarray[j]
          if (typeof(subarray[j][1]) == "string") {
            arrayColors = "<code style = 'color:red'>" + subarray[j][1] + "</code>"
          }else if(typeof(subarray[j][1]) == "number") {
            arrayColors = "<code style = 'color:green'>" + subarray[j][1] + "</code>"
            
          }else if(typeof(subarray[j][1]) == null){
            arrayColors = "<code style = 'color:pink'>" + subarray[j][1] + "</code>"
          }

          if (j == subarray.length-1) {
            subCadena +="&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"<code style='color: blue;'>" + subarray[j][0]+ " </code>: " + arrayColors ;
          }else{
            subCadena += "<br>"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"<code style='color: blue;'>" + subarray[j][0]+ " </code>: " + arrayColors + ",<br>" 
          }
        }
        cadenaFinal += "&nbsp"+"&nbsp"+"&nbsp"+"<code style='color: blue;'>" + array[0]+" </code>: { "+ subCadena +"<br>}";

      }      
    }
    if (i == contador-1) {
      cadenaFinal += "&nbsp"+"&nbsp"+"&nbsp"+"<code style='color: blue;'>" + array[0]+" </code>: " +  formatColor;
    }else{
      cadenaFinal += "&nbsp"+"&nbsp"+"&nbsp"+"<code style='color: blue;'>" + array[0]+" </code>: " +  formatColor +", <br>";
    }
  }
    document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal +"<br>}"
  };






