document.getElementById("start").addEventListener("input", function (){
  var values = document.getElementById("start").value;
  var spaceLenght = 0;
  var result =  printItems((JSON.parse(values)),spaceLenght);
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML =  result;
});

function iterarSpace(spaceLenght) {
  var spacer = ""
  var spaceCharacter = "&nbsp;&nbsp;&nbsp;&nbsp;";
  for (var i =0 ; i < spaceLenght; i++) {
    spacer = spacer + spaceCharacter;
  }
  return spacer;
};

function comaBr(countComaBr, i){
  if ( i < countComaBr-1) {
     return ",<br>";
  }else{
    return "<br>";
  };
};

function printItems(valores,spaceLenght){
  spaceLenght++
  var result = "";

  if (typeof(valores) == "string") {
    return "<code style = 'color:red'>'" + valores + "'</code>";

  }else if (typeof(valores) == "number") {
    return "<code style = 'color:green'>" + valores + "</code>";

  }else if (valores == null) {
    return "<code style = 'color:pink'>" + valores + "</code>";

  }else if (typeof(valores) == "boolean") {
    return  "<code style = 'color:orange'>" + valores + "</code>";
  }
  else if(Array.isArray(valores)){
    for (var i = 0; i <  valores.length; i++) {
      var space = iterarSpace(spaceLenght);
      var formatItems = printItems(valores[i],spaceLenght);
      var coma = comaBr(valores.length,i);
      result +=  space + formatItems + coma;
    }
    spaceLenght--
    space = iterarSpace(spaceLenght);
    return "[ <br>" +  result  + space +"]"

  }else if (typeof(valores) == "object") {
    var entries = Object.entries(valores);
    for (var i =0; i < entries.length; i++ ) {
      var space = iterarSpace(spaceLenght);
      formatItems = printItems(entries[i][1],spaceLenght);
      var coma = comaBr(entries.length,i);
      result +=  space + "<code style='color: blue;'>"+ entries[i][0] + "</code>: " + formatItems + coma;
    }
    spaceLenght--
    space = iterarSpace(spaceLenght)
    
    return  "{ <br>"  +result + space +"}"  
    
  }else{
    return  "<code style = 'color:black'>" + valores + "</code>"
  };
};
