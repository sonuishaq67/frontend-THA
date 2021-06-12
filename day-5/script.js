function add() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("lnum").value;
    document.getElementById("val").innerHTML = parseFloat(x) + parseFloat(y);
}

function sub() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("lnum").value;
    document.getElementById("val").innerHTML = parseFloat(x) - parseFloat(y);
}

function multiply() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("lnum").value;
    document.getElementById("val").innerHTML = parseFloat(x) * parseFloat(y);
}

function divide() {
    x = document.getElementById("fnum").value;
    y = document.getElementById("lnum").value;
    document.getElementById("val").innerHTML = parseFloat(x) / parseFloat(y);
}

function reset() {
    document.getElementById("firstform").reset();
}