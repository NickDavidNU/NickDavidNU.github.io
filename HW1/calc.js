var display = '';
var decimalAdded = false;
var negative = 0;
var curop = '';
var first = '';
var second = '';



function cleared() {
    display = 0;
    decimalAdded = 0;
    negative = 0;
    curop = 0;
    first = '';
    second = '';
    document.getElementById("answer").innerHTML = '0';
}
function if9() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '9';
        display='9';
    }
    else {
        display += '9';
        document.getElementById("answer").innerHTML = display;
    }
}
function if8() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '8';
        display='8';
    }
    else {
        display += '8';
        document.getElementById("answer").innerHTML = display;
    }
}
function if7() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '7';
        display='7';
    }
    else {
        display += '7';
        document.getElementById("answer").innerHTML = display;
    }
}
function if6() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '6';
        display='6';
    }
    else {
        display += '6';
        document.getElementById("answer").innerHTML = display;
    }
}
function if5() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '5';
        display='5';
    }
    else {
        display += '5';
        document.getElementById("answer").innerHTML = display;
    }
}
function if4() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '4';
        display='4';
    }
    else {
        display += '4';
        document.getElementById("answer").innerHTML = display;
    }
}
function if3() {
    var inner = parseFloat(display);
    if (inner === 0) {
        document.getElementById("answer").innerHTML = '3';
        display='3';

    }
    else {
        display += '3';
        document.getElementById("answer").innerHTML = display;
    }
}
function if2() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '2';
        display='2';

    }
    else {
        display += '2';
        document.getElementById("answer").innerHTML = display;
    }
}
function if1() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '1';
        display='1';

    }
    else {
        display += '1';
        document.getElementById("answer").innerHTML = display;
    }
}

function if0() {
    var inner = parseFloat(display);
    if (inner == 0) {
        document.getElementById("answer").innerHTML = '0';
        display='0';

    }
    else {
        display += '0';
        document.getElementById("answer").innerHTML = display;
    }
}
function ifdec() {
    var inner = parseFloat(display);

    if (decimalAdded == false) {
        display += '.';
        document.getElementById("answer").innerHTML = display;
        decimalAdded = true;
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