var colours = new Array ();
colours[0] = "Red";
colours[1] = "Green";
colours[2] = "Blue";
colours[3] = "Yellow";

function startGame()
{
  var rando = Math.floor( Math.random()*4 );
  document.getElementById("output").innerHTML= colours[rando] ;
setTimeout ("disappear()", 1000);
}

function disappear ()
{
  document.getElementById("output").innerHTML="";
}
// ran out of time - didn't really understand the second part of this example

/*  Random = rando;
if (rando == 0){
  document.getElementById("output").innerHTML = "Red";
}
else if (rando == 1) {
  document.getElementById("output").innerHTML = "Green";
}
else if (rando == 2) {
  document.getElementById("output").innerHTML = "Blue";
}
else if (rando == 3){
  document.getElementById("output").innerHTML = "Yellow";
}
}*/
