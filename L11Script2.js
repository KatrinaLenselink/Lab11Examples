var a = new Array();
a[0] = "door";
a[1] = "wall";
a[2] = "window";
a[3] = "floor";
a[4] = "ceiling";

var b = new Array();
b[0] = "pretty";
b[1] = "shiny" ;
b[2] = "happy" ;
b[3] = "tall" ;
b[4] = "flat";

function sentence()
{

var c = Math.floor( Math.random()*5 );
var d = Math.floor( Math.random()*5 );

document.getElementById("output").innerHTML+= "What a " + b[c] + " " + a[d] + "!"+ "<br/>";
}
