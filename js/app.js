var cards = {};
var log = false;
var conten = document.getElementById("fullcon")
var incon = document.getElementById("content")
var pojem = document.getElementsByClassName("pojemnik")
var win = document.getElementById("win")
var okno = '<div class="topw"><div class="title"></div><img src="./obrazki/ui/x.png" class="x" id="x"/><div class="text"></div></div>'
var blure ="-webkit-filter: blur(5px);-moz-filter: blur(5px);-o-filter: blur(5px);-ms-filter: blur(5px);filter: blur(5px);"
var mottol = document.getElementById("motto")
function innpage(inl){
    win.innerHTML = okno;
    conten.style = blure;
    fetch("./json/usData/"+inl+".json").then(r=>r.json().then(j=>{
        win.innerHTML = getwoindow(j.title,j.content)
        try{
            window[j.scriptf]()
        }catch{

        }
        document.getElementById("x") .addEventListener("click", i => {
            conten.style=""
            win.innerHTML = ""
        })
    }))
}
function test() {
conten.style = blure
win.innerHTML = okno.toString()
//x

}
home()
function home(){
    var hom = '<div class="pojemnik"></div>'
    
    console.log(pojem)
    fetch("./json/undersite.json").then(r=>r.json().then(j=>{
        var ou = ""
        j.sites.forEach(ss=>{
            ou+=getItem(ss.img,ss.title,ss.content)
            document.getElementsByClassName("pojemnik").innerHTML = ou;
        })
        var hom = '<div class="pojemnik">'+ou+'</div>'
        incon.innerHTML = hom
    }))
}
function account(){
    incon.innerHTML = '<div class="center">aktualnie nie dostępne</div>';
}
function me(){
    var mee = '<div class="center"><p><div class="b">Witam</div></p><p>Jestem Luk</p><p class="ods"><div class="b">O mnie</div></p><p>hej wciąż pracyję nad moim montażem i nad moimi</p><p>filmami oraz shortsami wraz z tiktokami</p><p>pracuję też obecnie nad projektem</p><p>na którego temat szczegułów nie mogę</p><p>zdradzić zazwyczaj jak piszę nie używam</p><p>przecinków i kropek</p><p class="ods"><div class="b">Moje sociale</div></p><div class="ob"><div class="ss"><ahref="https://www.youtube.com/c/Luktvpl"class="fixAb"target="_blank"><img src="/obrazki/loga/luk.webp" alt="Luk" class="itemIMG" />luk</a></div><div class="ss"><ahref="https://www.youtube.com/channel/UCJQyzpbrRPE4CCygVgORhtQ"class="fixAb"target="_blank"><img src="/obrazki/loga/luk_Play.webp" alt="Luk" class="itemIMG" />luk_play</a></div><div class="ss"><ahref="https://www.youtube.com/channel/UC56jZvKTddM2OJMZeAWiYBg"class="fixAb"target="_blank"><img src="/obrazki/loga/luk_Dev.webp" alt="Luk" class="itemIMG" />luk_dev</a></div><div class="ss"><ahref="https://www.youtube.com/channel/UCSmdhlfXRI4M6fvt9GVUadw"class="fixAb"target="_blank"><img src="/obrazki/loga/luk_Shorts.webp" alt="Luk" class="itemIMG" />luk_shorty</a></div><div class="ss"><ahref="https://www.tiktok.com/@luk_tiktak"class="fixAb"target="_blank"><img src="/obrazki/loga/luk_tiktak.webp" alt="Luk" class="itemIMG" />luk_tiktaki</a></div><div class="ss"><a href="https://luktvpl.github.io/forwarder/dc.html" class="fixAb" target="_blank"><img src="/obrazki/loga/luk_dc.webp" alt="Luk" class="itemIMG" />discord</a></div></div><p class="ods"><div class="b">Co obecnie robie</div></p><p>obecnie zajmuję się :</p><p>-nagrywaniem filmów</p><p>-programowanie</p><p>-prowadzę serwer</p><p>jeśli chcesz wiedzieć</p><p>co aktualnie robię zapraszm</p><p>na trello : <a href="https://trello.com/b/fHHyGF5M/luktvpl" >link</a></p><p class="ods"><div class="b">Kontak</div></p><p>jeśli chcesz się ze mną</p><p>zkontaktować możesz :</p><p>-napisać mail <a href="mailto:luktvpl@wp.pl" target="_blank">luktvpl@wp.pl</a></p><p>(małe szanse na odpowiedzi)</p><p>-napisać na discord : (luktvpl#3144)</p></div>';
    incon.innerHTML = mee+'<p class="inv">tajne</p>';
}
function getinnersite(name){

}
function getItem(imgName,Title,innersite){
var item = '<div class="itemSZ"><img src="./obrazki/miniaturki/'+imgName+'.webp" alt="nic" class="itemIMGL"/>'+Title+'<p class="itemButton" onclick="innpage('+"'"+innersite+"'"+')">klik</p></div>'
console.log(item)
return item;
}
function getwoindow(title,text){
    var windows = '<div class="topw"><div class="title">'+title+'</div><img src="./obrazki/ui/x.png" class="x" id="x"/><p></p><div class="text">'+text+'</div></div>'
    return windows;
}
//motto
fetch("./json/motta.json").then(r => r.json().then(m=>{
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

//loganie logów
function clog(arg){
    if(log==true)console.log(arg);
}
//czysczenie cacheu
setTimeout(() => {
    caches.keys().then(c=>c.forEach(cc=>caches.delete(cc)))
}, 100);
