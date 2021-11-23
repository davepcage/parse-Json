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
    return "[ " + result + "<br>&nbps]"

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
