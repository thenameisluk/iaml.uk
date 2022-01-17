//warstawa 1-4 kordynat x i y wymiar 1-3
var a1001
function takechunk(warstwa,x,y,wymiar){
    if(x<10) "0"+x;
    if(y<10) "0"+y;
    var vname="a"+warstwa+x+y+wymiar;
    let x = eval(vname)
    return x;
}