var display = '0';
//var decimalAdded = false; retired
var negative = 0;
var theop = '';
var first = '';
var second = '';
var myop = 0;
var opchecker = true;



function cleared() {
    display = '0';
    decimalAdded = 0;
    negative = 0;
    theop = 0;
    first = '';
    second = '';
    document.getElementById("answer").innerHTML = '0';
}
function if9() {
    if (opchecker == false) {
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;

    var inner = parseFloat(display);
    console.log(display);
    if (inner == 0 && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '9';
        display='9';
    }
    else {
        display += '9';
        document.getElementById("answer").innerHTML = display;
    }
}
function if8() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0 && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '8';
        display='8';
    }
    else {
        display += '8';
        document.getElementById("answer").innerHTML = display;
    }
}
function if7() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '7';
        display='7';
    }
    else {
        display += '7';
        document.getElementById("answer").innerHTML = display;
    }
}
function if6() {
    if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '6';
        display='6';
    }
    else {
        display += '6';
        document.getElementById("answer").innerHTML = display;
    }
}
function if5() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '5';
        display='5';
    }
    else {
        display += '5';
        document.getElementById("answer").innerHTML = display;
    }
}
function if4() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '4';
        display='4';
    }
    else {
        display += '4';
        document.getElementById("answer").innerHTML = display;
    }
}
function if3() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner === 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '3';
        display='3';

    }
    else {
        display += '3';
        document.getElementById("answer").innerHTML = display;
    }
}
function if2() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '2';
        display='2';

    }
    else {
        display += '2';
        document.getElementById("answer").innerHTML = display;
    }
}
function if1() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '1';
        display='1';

    }
    else {
        display += '1';
        document.getElementById("answer").innerHTML = display;
    }
}
function if0() {
      if (opchecker == false) {
        console.log
        document.getElementById("answer").innerHTML = '0';
        display='0';
    }
    opchecker = true;
    var inner = parseFloat(display);
    if (inner == 0  && display.indexOf('.')<0) {
        document.getElementById("answer").innerHTML = '0';
        display='0';

    }
    else {
        display += '0';
        document.getElementById("answer").innerHTML = display;
    }
}
function ifdec() {
    console.log(display.indexOf('.'));
    var inner = parseFloat(display);
    //updated to account for adding two numbers with decimals and decimal counter not always being reset (this way seems easier than a bunch of if statements)
    if (display.indexOf('.')<0 || display == '') {
    //if (decimalAdded == false) {
        display += '.';
        console.log(display);
        document.getElementById("answer").innerHTML = display;
        }
    

}
function ifneg() {
    var inner = parseFloat(display);
    if (inner == 0) {
        
    }
    else {
        if (negative == 0) {
            display = '-' + display;
            document.getElementById("answer").innerHTML = display;
            negative = 1;
        }
        else {
            display = display.slice(1,display.length);
            document.getElementById("answer").innerHTML = display;
            negative = 0;
        }
    }
 
}
var lastnum = 0;
function ifadd() {
    document.getElementById("answer").innerHTML = display;
    opchecker = false;
    myop = 1;
    if (first == '') {
        first = display;
        
        
        document.getElementById("answer").innerHTML = display;
    }
    else if (second == '') {
        second = display;
        console.log('second' + second);
        document.getElementById("answer").innerHTML = display;
        ifequal();
        console.log('display: ' + document.getElementById("answer").innerHTML);
        first = document.getElementById("answer").innerHTML;
    }
    else {
        ifequal();
    }
}
function ifmult() {
    document.getElementById("answer").innerHTML = display;
    opchecker = false;    
    myop = 2;
    if (first == '') {
        first = display;
        document.getElementById("answer").innerHTML = display;

    }
    else if (second == '') {
        second = display;
        console.log('second' + second);
        document.getElementById("answer").innerHTML = display;
        ifequal();
        console.log('display: ' + document.getElementById("answer").innerHTML);
        first = document.getElementById("answer").innerHTML;   }
    else {
        ifequal();
    }
}
function ifsubt() {
      document.getElementById("answer").innerHTML = display;
    opchecker = false;    
    myop = 3;
    if (first == '') {
        first = display;
        document.getElementById("answer").innerHTML = display;

    }
    else if (second == '') {
        second = display;
        console.log('second' + second);
        document.getElementById("answer").innerHTML = display;
        ifequal();
        console.log('display: ' + document.getElementById("answer").innerHTML);
        first = document.getElementById("answer").innerHTML;   }
    else {
        ifequal();
    }
}
function ifdivide() {
         document.getElementById("answer").innerHTML = display;
    opchecker = false;    
    myop = 4;
    if (first == '') {
        first = display;
        document.getElementById("answer").innerHTML = display;

    }
    else if (second == '') {
        second = display;
        console.log('second' + second);
        document.getElementById("answer").innerHTML = display;
        ifequal();
        console.log('display: ' + document.getElementById("answer").innerHTML);
        first = document.getElementById("answer").innerHTML;   }
    else {
        ifequal();
    }
}

function ifequal() {
    var inner = parseFloat(display);
    newfirst = parseFloat(first);
    second = inner;
    var zerocheck = 1;

    newsecond = parseFloat(second);
    console.log('new first' + newfirst);
    console.log('new second' + newsecond);
    console.log('my op' + myop);
    

    if (myop == 0) { 
        var returnv=newsecond;
        opchecker = false;    

    }
    if (myop == 1) {
        if (newfirst && newsecond) {
            var returnv=newfirst + newsecond;
            lastnum = newsecond;
        }
        else if (newfirst) {
            returnv = newfirst + newfirst;
            lastnum = newfirst;
        }
        else {
            returnv= inner+lastnum;
        }
    }
     if (myop == 2) {
        if (newfirst && newsecond) {
            var returnv=newfirst * newsecond;
            lastnum = newsecond;

        }
        else if (newfirst) {
            returnv = newfirst * newfirst;
            lastnum=newfirst
        }
         else {
            returnv= inner*lastnum;
        }
    }
    if (myop == 3) {
        if (newfirst && newsecond) {
            var returnv=newfirst - newsecond;
            lastnum = newsecond;

        }
        else if (newfirst) {
            returnv = newfirst - newfirst;
            lastnum=newfirst

        }
        else {
            returnv= inner-lastnum;
        }
    }
     if (myop == 4) {
        if (newfirst && newsecond) {
            lastnum = newsecond;
            var returnv=newfirst / newsecond;
        }
        else if (newfirst || newfirst == 0) {
            if (newsecond == 0) {
                zerocheck = 0;
            }

            
            else {
                var returnv=newfirst / newfirst;
                lastnum=newfirst

        }   
    }
         else {
             returnv = inner/lastnum;
         }
     }
    console.log("error check " + zerocheck);
        if (zerocheck == 0) {
            document.getElementById("answer").innerHTML = 'Not a Number';
            display=0;

        }
        else if (zerocheck == 1) {
            document.getElementById("answer").innerHTML = returnv;
            display=returnv;
        }
        first = '';
        second = '';
         

}