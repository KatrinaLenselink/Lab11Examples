

function loops(){

  var words = document.getElementById("number").value;
  var text = "";
  var i;
  for (i=0; i<= words; i++)
  {
    text += i + "<br/>";
}

document.getElementById("out").innerHTML = text;
}
