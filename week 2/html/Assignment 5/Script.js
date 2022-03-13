function conversionTable(tagId, from){
    var first = document.getElementById("Input1")
  
    from=first;
    var conv = document.getElementById(tagId);
    var tab = document.getElementById("table");
    var bod = document.createElement("tbody");
    var thed = document.createElement("thead");
    tab.appendChild(thed);
    tab.appendChild(bod);
    var tr = document.createElement("tr");
    thed.appendChild(tr);
    var th = document.createElement("th");
    tr.appendChild(th);
    th.appendChild(document.createTextNode("Celsius"));
    th=document.createElement("th");
    tr.appendChild(th);
    th.appendChild(document.createTextNode("Fahrenheit"));
    conv.appendChild(tab);
}

    td=document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(celsiustofahrenheit(i)));

function celsiustofahrenheit(c) { return Math.round((c * 1.8)+32)}

from = parseInt(first.value);
