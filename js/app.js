var conten = document.getElementById("fullcon")
var win = document.getElementById("win")
var okno = '<div class="topw">test <img src="./obrazki/ui/x.png" class="x" id="x"/> </div>'
var blure ="-webkit-filter: blur(5px);-moz-filter: blur(5px);-o-filter: blur(5px);-ms-filter: blur(5px);filter: blur(5px);"
function test() {
conten.style = blure
win.innerHTML = okno.toString()
//x
document.getElementById("x") .addEventListener("click", i => {
conten.style=""
win.innerHTML = ""
})
}
