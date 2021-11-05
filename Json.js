var array = ""
cadenaFinal = ""
contador = 0
space = "&nbsp&nbsp&nbsp"
function formatString(stringValue){
  return "<code style = 'color:red'>" + stringValue + "</code>"
}
function formatNumber(numberValue) {
  return "<code style = 'color:green'>" + numberValue + "</code>"
}
function formatNull(){
  return "<code style = 'color:orange'>null</code>"
}
function formatKeys(keys) {
  return  "<code style='color: blue;'>" + keys + " </code>: "
}
document.getElementById("convert").addEventListener("click", function (){
  document.getElementById("count").innerHTML = " ";
  document.getElementById("result").innerHTML = " ";
  valores = document.getElementById("start").value
  convertToArray = Object.entries(JSON.parse(valores.split(",")))
  contador = convertToArray.length
  printItems(convertToArray);

});
function printItems() {
  formatColor = ""
  for (var i = 0; i < contador; i++) {
    array = convertToArray[i]
    if (typeof(array[1]) == "string") {
      formatColor = formatString(array[1])

    }else if(typeof(array[1]) == "number"){
      formatColor = formatNumber(array[1])

    }else if (array[1] == null) {
      formatColor =formatNull()

    }else if (typeof(array[1])) {
      subarray = array[1]
      if (Array.isArray(subarray)) {
        subColor = ""
        for (var e = 0;e < array[1].length; e++){
          array[1][e]
          if (typeof(array[1][e]) == "string") {
            array[1][e] = formatString(array[1][e])
          }else if (typeof(array[1][e]) == "number") {
            array[1][e] = formatNumber(array[1][e])
          }else {
            array[1][e] = formatNull()
          }

          if (e == array[1].length-1) {
            subColor += "<br>"+space + space +  array[1][e];
          }else{
            subColor += "<br>"+space + space +  array[1][e] + "," 
          }
        }
        formatColor = "["+ subColor + "<br>"+space+"]"
      }else{
        subCadena= ""
        subarray = Object.entries(subarray)
        for (var j = 0; j < subarray.length; j++) {
          subarray[j]
          if (typeof(subarray[j][1]) == "string") {
            arrayColors = formatString(subarray[j][1])
          }else if(typeof(subarray[j][1]) == "number") {
            arrayColors = formatNumber(subarray[j][1])
            
          }else if(subarray[j][1] == null){
            arrayColors = formatNull()
          }

          if (j == subarray.length-1) {
            subCadena +="<br>" + space + space + space + formatKeys(subarray[j][0]) + arrayColors ;
          }else{
            subCadena += "<br>" + space + space + space + formatKeys(subarray[j][0]) + arrayColors + "," 
          }
        }
        cadenaFinal += space + formatKeys(array[0]) + "{ "+ subCadena +"<br>"+space+"}";
      }     
    }
    if (i != contador-1) {
      cadenaFinal += space + formatKeys(array[0]) +  formatColor +", <br>";
    }    
  }
    document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal +"<br>}"
};






