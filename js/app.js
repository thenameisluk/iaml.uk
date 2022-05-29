var cards = {};
var log = true
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
//motto
fetch("https://luktvpl.github.io/json/motta.json").then(r => r.json().then(m=>{
    var mtu = m.m;
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var use = day%mtu.length
    clog(day);
    clog(use);
    clog(mtu.length)
    mottol.innerHTML = mtu[use];
}).catch(wtf=>console.log(wtf))).catch(wtf=>console.log(wtf))

function clog(arg){
    if(log==true)console.log(arg);
}
setTimeout(() => {
    caches.keys().then(c=>c.forEach(cc=>caches.delete(cc)))
}, 100);