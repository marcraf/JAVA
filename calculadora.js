var calculadora= function calc(n1,n2)
{
var table=document.getElementById("tabelinha");  

  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = n1+" + "+n2;
  cell2.innerHTML = n1+n2;
  
  
  var row=table.insertRow(2);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = n1+" - "+n2;
  cell2.innerHTML = n1-n2;
  
    var row=table.insertRow(3);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = n1+" * "+n2;
  cell2.innerHTML = n1*n2;
  
    var row=table.insertRow(4);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = n1+" / "+n2;
  cell2.innerHTML = n1/n2;
  
  
   var row=table.insertRow(5);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = n1+" % "+n2;
  cell2.innerHTML = n1%n2;
  
};




