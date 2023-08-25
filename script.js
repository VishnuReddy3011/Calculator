function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("curr-res").value = "";
}
// This function display values
function display(value) {
    document.getElementById("result").value += value;
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("curr-res").value = q;
}
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById("curr-res").value = "";
}
function deFun(){
    var p = document.getElementById("result").value;
    if(p.length==1){
        document.getElementById("result").value = "";
        document.getElementById("curr-res").value = "";
    }
    else{
        p = p.substring(0,p.length-1);
        document.getElementById("result").value = p;
        var q = eval(p);
        document.getElementById("curr-res").value = q;
    }
}
