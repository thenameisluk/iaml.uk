let ctx = document.getElementById("sky").getContext("2d")

function style(s){
    switch (s){
        case "b":
            ctx.fillStyle = "black"
        break;
        case "w":
            ctx.fillStyle = "white"
        break;
        case "g":
            ctx.fillStyle = "green"
        break;
        default:
            ctx.fillStyle = s;
    }
}

function draw(x,y,w,h){
    ctx.fillRect(x,y,w,h);
}

class star{
    x
    y
    constructor(){
        
    }
}