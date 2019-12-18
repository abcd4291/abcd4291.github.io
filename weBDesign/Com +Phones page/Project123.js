var valid_id = "usr";
var valid_pw = "pw";


var id = document.getElementById("login");
var pw = document.getElementById("pw");

submit.onclick = function() {
  if (valid_id == id.value)
    if (valid_pw == pw.value)
      window.location.href = "molla.html";
}