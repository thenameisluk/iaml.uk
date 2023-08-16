var pics = 2;
var pic = 0;
var inProggress = false
function prevPic(){
    if(inProggress)
        return;
    inProggress = true;
    
    var picA = document.getElementById("picA")
    var picB = document.getElementById("picB")

    picA.classList = "img40"
    picB.classList = "img40h"

    picA.setAttribute("src","./obrazki/pkmgo/"+pic+".jpg")
    
    pic--;
    if(pic<0)
        pic=pics-1;

    picB.setAttribute("src","./obrazki/pkmgo/"+pic+".jpg")

    picA.classList.toggle("img40away")
    picB.classList.toggle("img40in")
    setTimeout(()=>{
        inProggress=false;
        picA.classList = "img40h"
        picB.classList = "img40"
    },300);
}

function nextPic(){
    if(inProggress)
        return;
    inProggress = true;
    
    var picB = document.getElementById("picA")
    var picA = document.getElementById("picB")

    picA.classList = "img40"
    picB.classList = "img40h"

    picA.setAttribute("src","./obrazki/pkmgo/"+pic+".jpg")
    
    pic++;
    if(pic==pics)
        pic=0;

    picB.setAttribute("src","./obrazki/pkmgo/"+pic+".jpg")

    picA.classList.toggle("img40away")
    picB.classList.toggle("img40in")
    setTimeout(()=>{
        inProggress=false;
        picA.classList = "img40h"
        picB.classList = "img40"
    },300);
}