var ctx = document.getElementById("ctx").getContext("2d");
var x=4
var y=4
var maparea = {};
function move(x,y,kierunek) {
    
}
    

function rendermap(x,y,px,py) {
//przepisz
    for (let iy=0;iy<=19;iy++){
    for (let ix=0;ix<=15;ix++){
        py=iy*14;
        by=iy-9+y;
        px=ix*16;
        bx=ix-7+x;
        console.log(getblock(bx,by))
        renderline(getblock(bx,by),px,py)
    }}
}
function renderline(data,x,y,) {
    //console.log(data+" "+x+" "+y);
    
}