function formatKeys(keys) {
  return  "<code style='color: blue;'>" + keys + " </code>: "
}
function printElement(elementPrint){
  if (typeof(elementPrint) == "string") {
    return "<code style = 'color:red'>" + elementPrint + "</code>"
    console.log(elementPrint)
  }else if(typeof(elementPrint) == "number"){
    return "<code style = 'color:green'>" + elementPrint + "</code>"
  }else if (elementPrint == null) {
    return "<code style = 'color:orange'>null</code>"
  }
}

document.getElementById("convert").addEventListener("click", function (){
  document.getElementById("count").innerHTML = " ";
  document.getElementById("result").innerHTML = " ";
  valores = document.getElementById("start").value
  convertToArray = Object.entries(JSON.parse((valores).split(",")))
  printItems(convertToArray)
});

function printItems(convertToArray) {
  if (Array.isArray(convertToArray)) {
    var array = ""
    cadenaFinal = ""
    space = "&nbsp&nbsp&nbsp"
    formatColor = ""
    for (var i = 0; i < convertToArray.length; i++) {
      array = convertToArray[i]
      formatColor =  printElement(array[1])

      if (typeof(array[1])) {
        subarray = array[1]
        if (Array.isArray(subarray)) {
          subColor = ""
          for (var e = 0;e < array[1].length; e++){
            array[1][e] = printElement(array[1][e])

            if (e == array[1].length-1) {
              subColor += "<br>"+space + space +  array[1][e];
            }else{
              subColor += "<br>"+space + space +  array[1][e] + "," 
            }
          }
          formatColor = "["+ subColor + "<br>"+space+"]"
        }   
      }
      if (i != convertToArray.length-1) {
        cadenaFinal += space + formatKeys(array[0]) +  formatColor +", <br>";
      }else{
        subCadena= ""
        subarray = Object.entries(subarray)
        for (var j = 0; j < subarray.length; j++) {
          subarray[j]
          arrayColors = printElement(subarray[j][1])
          if (j == subarray.length-1) {
            subCadena +="<br>" + space + space + space + formatKeys(subarray[j][0]) + arrayColors ;
          }else{
            subCadena += "<br>" + space + space + space + formatKeys(subarray[j][0]) + arrayColors + "," 
          }
        }
        cadenaFinal += space + formatKeys(array[0]) + "{ "+ subCadena +"<br>"+space+"}";
      }    
    }
  }
    document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal +"<br>}"
};





