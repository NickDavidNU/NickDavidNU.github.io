
function makenewrow() {


// Find a <table> element with id="myTable":
var table = document.getElementById("firsttable");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);


// Add some text to the new cells:

        var element1 = document.createElement('input');
        element1.type="text";
        cell1.ALIGN="center";
        cell1.appendChild(element1);
         var element2 = document.createElement('input');
        element2.type="number";
        element2.min="0";
        cell2.appendChild(element2);
        var element3 = document.createElement('input');
        element3.type="number";
        element3.min="0";
        cell3.appendChild(element3);
        var element4 = document.createElement('input');
        element4.type="number";
        element4.min="0";
        cell4.appendChild(element4);


}
