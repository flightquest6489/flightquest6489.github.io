function conversionTable(tagId, from, to){
    var first = document.getElementById("Input1")
    var second = document.getElementById("Input2")
    from=first;
    to=second;
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
for (var i = from; i<=to; i++){
    tr.document.createElement("tr");
    bod.appendChild(tr);
    td = document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(i));
    td=document.createElement("td");
    tr.appendChild(td);
    td.appendChild(document.createTextNode(celsiustofahrenheit(i)));
}
function celsiustofahrenheit(c) { return Math.round((c * 1.8)+32)}

from = parseInt(first.value);
to = parseInt(second.value);