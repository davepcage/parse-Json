// function formatKeys(keys) {
//   return  "<code style='color: blue;'>" + keys + " </code>: "
// }
// function printElement(elementPrint){
//   if (typeof(elementPrint) == "string") {
//     return "<code style = 'color:red'>" + elementPrint + "</code>"
//   }else if(typeof(elementPrint) == "number"){
//     return "<code style = 'color:green'>" + elementPrint + "</code>"
//   }else if (elementPrint == null) {
//     return "<code style = 'color:orange'>null</code>"
//   }
// }


document.getElementById("convert").addEventListener("click", function (){
  document.getElementById("count").innerHTML = " ";
  
  values = document.getElementById("start").value
  result = printItems((JSON.parse(values)))
  document.getElementById("result").innerHTML = result;
});

function printItems(valores){
  result = ""
  if (typeof(valores) == "string") {
    return "<code style = 'color:red'>" + valores + "</code>"
    // console.log(valores)

  }else if (typeof(valores) == "number") {
    return "<code style = 'color:green'>" + valores + "</code>"
    // console.log(valores)

  }else if (valores == null) {
    return "<code style = 'color:pink'>" + valores + "</code>"
    // console.log(valores)

  }else if(Array.isArray(valores)){
    for (var i = 0; i <  valores.length; i++) {
      valores[i]
      result += "<br>"+ "++" + printItems(valores[i]);
    }
    return "[ " + result + "<br>]"

  }else if (typeof(valores) == "object") {
    var entries = Object.entries(valores)
    for (var i =0; i < entries.length; i++ ) {
      entries[i]

      result += "<code style='color: blue;'> " + entries[i][0] + " </code> : " + printItems(entries[i][1]) + "<br>"

    }
    return "{  <br>" + result +"}"
    
  }else{
    return  "<code style = 'color:black'>" + valores + "</code>"
  }
}


// function printI(valores) {
//   var array = ""
//   cadenaFinal = ""
//   space = "&nbsp&nbsp&nbsp"
//   formatColor = ""

//     if (Array.isArray(valores)) {
//       for (var i = 0; i < valores.length; i++){
//         subChain= ""
//         array = valores[i]
//         subarray = array[1]
//         formatColor =  printElement(array[1])
//         if (Array.isArray(subarray)) {
//           subColor = ""
//           for (var e = 0;e < array[1].length; e++){
//             array[1][e]
            
//             if (array[1][e] == null) {
//               array[1][e] = printElement(array[1][e])
//             }else if (typeof(array[1][e]) != "object") {
//               array[1][e] = printElement(array[1][e])
//             }else{
//               chain = Object.entries(array[1][e])
//               for (var j = 0; j < chain.length; j++) {
//                 chain[j]
//                 arrayColors = printElement(chain[j][1])
//                 if (j == chain.length-1) {

//                   subChain +="<br>" + space + space +space +formatKeys(chain[j][0]) + arrayColors + "<br>"+ space + space +"}," ;
//                 }else{
//                   subChain += "<br>" + space + space +"{" +"<br>" + space + space + space + formatKeys(chain[j][0]) + arrayColors + "," 
//                 }
//               }
//               subColor = subChain 
//             }
//             if (e == array[1].length-1) {
             
//               subColor += "<br>"+space + space +  array[1][e];
//             }else{
//               subColor += "<br>"+space + space +  array[1][e] + "," 
//             }
//           }
//           formatColor = "["+ subColor + "<br>"+space+"]"
//         }else {
//           subCadena = ""
//           if (typeof(subarray) == "object") {
//             if (subarray != null) {
//               sa = Object.entries(subarray)
//               for (var h = 0; h < sa.length; h++) {
//                 sa[h]
//                 arrayColors = printElement(sa[h][1])
//                 if (h == sa.length-1) {
//                   subCadena +="<br>" + space + space + space + formatKeys(sa[h][0]) + arrayColors ;
//                 }else{
//                   subCadena += "<br>" + space + space + space + formatKeys(sa[h][0]) + arrayColors + "," ;
//                 }
//               }
//               formatColor ="<br>" + space + space +"{"+ subCadena +"<br>" +space + space +"}"
//             }
//           }
//         }  
        
//         if (i != valores.length-1) {
//           cadenaFinal += space + formatKeys(array[0]) +  formatColor +", <br>";
//         }else{
//           cadenaFinal += space + formatKeys(array[0]) + formatColor +"<br>"+space;

//         }   
 
//       } 
//     }else{
//       valores = Object.entries(valores)
//       printItems(valores) 
//     }
     
//     document.getElementById("result").innerHTML = "{ <br>" + cadenaFinal +"<br>}"
// };

