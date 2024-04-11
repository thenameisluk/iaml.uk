//ranking
//https://api.github.com/gists/70b1049e28ae65411c6dd10da94016ec
var ntt;
var owt;
var dt;

var illegalChars = ['卐']
fetch("https://api.github.com/gists/70b1049e28ae65411c6dd10da94016ec").then((data)=>data.json().then(jsond=>{
    var mcppData = JSON.parse(jsond["files"]["mcpp.json"]["content"])
    console.log(mcppData)
    dt = mcppData;
    var ow = ""
    mcppData.ranking.o.forEach((p,i)=>{
        if(p.id!=0)ow += '<div class="place">'+(i*1+1)+'.<img class="pimg" src="'+p.avatar+'"> '+filter(p.name)+' : '+p.s+'</div>'
    })
    document.getElementById("ow").innerHTML = ow
    owt = ow;
    var nt = ""
    mcppData.ranking.n.forEach((p,i)=>{
        if(p.id!=0)nt += '<div class="place">'+(i*1+1)+'.<img class="pimg" src="'+p.avatar+'"> '+filter(p.name)+' : '+p.s+'</div>'
    })
    ntt = nt;
    document.getElementById("nt").innerHTML = nt
    
}))

function filter(txt){
    var r = "";
    for(var i = 0;i<txt.length;i++){
        if(illegalChars.includes(txt.charAt(i))){
            r += "?"
        }else r+=txt.charAt(i);
    }
    return r;
}
//stock
function sstock(){
    //ranking
    hide("rankG")
    hide("ow")
    hide("nt")
    //selector
    unselect("i1")
    select("i2")
    
}
//rank
function srank(){
    //ranking
    unhide("rankG")
    unhide("ow")
    hide("nt")
    unhide("rankT")
    unhide("owI")
    unhide("ntI")
    //selector
    select("i1")
    unselect("i2")
}
sele(0);
function sele(menu){
    //sections
    hide("rankG")
    hide("stockG")
    hide("world")
    hide("moreG")
    //selector
    unselect("i1t")
    unselect("i2t")
    unselect("i3t")
    unselect("i4t")

    switch (menu) {
        case 0:
                select("i1t")
                unhide("rankG")
            break;
        case 1:
                select("i2t")
                unhide("stockG")
            break;
        case 2:
                select("i3t")
                unhide("world")
            break;
        case 3:
                select("i4t")
                unhide("moreG")
    }
}
setTimeout(drawStock, 100);
//stock
function dy(p){
    //console.log(p);
    return Math.round((p/100)*160+20)
    
}
sa()
function sa(){
    select("i1m");
    unselect("i2m");
    unselect("i3m");
    unselect("i4m")
    unhide("author")
    hide("engin")
    hide("tos")
    hide("about")
}
function sc(){
    unselect("i1m");
    select("i2m");
    unselect("i3m");
    unselect("i4m")
    hide("author")
    unhide("engin")
    hide("tos")
    hide("about")
}
function st(){
    unselect("i1m");
    unselect("i2m");
    select("i3m");
    unselect("i4m")
    hide("author")
    hide("engin")
    unhide("tos")
    hide("about")
}
function so(){
    unselect("i1m");
    unselect("i2m");
    unselect("i3m");
    select("i4m")
    hide("author")
    hide("engin")
    hide("tos")
    unhide("about")
}

function drawStock(ore=0){
    for(var i = 1;i<11;i++){
        unselect("it"+i);
    }
    select("it"+(ore+1))
    /** @type {HTMLCanvasElement} */
    var canv = document.getElementById("stockC");
    var ctx = canv.getContext("2d");
    ctx.clearRect(0,0,300,200)
    ctx.lineWidth = 7
    ctx.fillStyle = "white"
    ctx.font = "30px minecraft_pl_font";
    function dline(y1,y2,x){
        if(y1<y2) ctx.strokeStyle = "red"
        else ctx.strokeStyle = "green"
        ctx.beginPath();
        ctx.moveTo(x,y1);
        ctx.lineTo(x,y2);
        ctx.stroke();
    }
    ctx.fillText("120",5,30)
    ctx.fillText("100",5,110)
    ctx.fillText("80",5,190)
    ctx.fillRect(50,20,250,1)
    ctx.fillRect(50,100,250,1)
    ctx.fillRect(50,180,250,1)
    var last = 50;
    for(var i = 0;i<30;i++){
        var r = (Math.random()*40-20)+last;
        if(r>100)r=100
        if(r<0)r=0
        dline(dy(last),dy(r),i*7+60);
        last = r;
    }

    
}

function sow(){
    select("ows")
    unselect("nts")
    hide("nt")
    unhide("ow")

}
function snt(){
    select("nts")
    unselect("ows")
    hide("ow")
    unhide("nt")
}


function select(id){
    document.getElementById(id).classList.add("selected")
}
function unselect(id){
    document.getElementById(id).classList.remove("selected")
}
function hide(id){
    document.getElementById(id).classList.add("hide")
}
function unhide(id){
    document.getElementById(id).classList.remove("hide")
}