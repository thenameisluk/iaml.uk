function check() {
  var d = localStorage.getItem("dark");
    if ( d = true ) {
      dark();
    }
    else {}  
}


function dark() {
  var e = document.body;
  e.classList.toggle("bdark");
  var ea = document.getElementById("s");
  ea.classList.toggle("sdark");
}
function mode() {
    var d = localStorage.getItem("dark");
    if (d = "true") {
      dark();
      localStorage.setItem("dark", false);
    } else if (d = "false") {
      dark();
      localStorage.setItem("dark", true);
    } else {
      dark()
      localStorage.setItem("dark", true);
    }