var cards = {};

var conten = document.getElementById("fullcon")
var win = document.getElementById("win")
var okno = '<div class="topw">test <img src="./obrazki/ui/x.png" class="x" id="x"/> </div>'
var blure ="-webkit-filter: blur(5px);-moz-filter: blur(5px);-o-filter: blur(5px);-ms-filter: blur(5px);filter: blur(5px);"
var mottol = document.getElementById("motto")
function test() {
conten.style = blure
win.innerHTML = okno.toString()
//x
document.getElementById("x") .addEventListener("click", i => {
conten.style=""
win.innerHTML = ""
})
}
var process = 1;
var size = 20
setInterval(() => {
    if(process==1)size+=1;
    else size-=1;
    if(size>25)process=0
    if(size<20)process=1
    mottol.style = "font-size:"+size+"px;"
}, 128);
function getinnersite(name){

}
function getItem(imgName,Title,innersite){

}
