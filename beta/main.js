

function start(){
    
    pisz("hej",0,50,"white")
    
}
function ctx(){
    var ctx = document.getElementById("ctx").getContext("2d");
    return ctx;
}
function pisz(co,x,y,kolor){
    var f = new FontFace('minecraft', 'url("/czcionki/minecraft_pl_font.woff")');

    f.load().then(function(font) {
    
      // Ready to use the font in a canvas context
      console.log('font ready');
      // Add font on the html page
      document.fonts.add(font);
      ctx().fillStyle = kolor;
      ctx().font = '60px minecraft';
      ctx().fillText(co, x,y);
      
    });
}
function test(){
    Obrazek("/obrazki/ikonki/1.PNG",0,0,50,50)
    
    rpgText("witam to jest tekst testowy i się nad nim napociłem","white",10,250);
}

function Obrazek(imgs,x,y,dx,dy) {
  var ctx = document.getElementById("ctx").getContext("2d");
  ctx .fillStyle = "black";
  ctx .fillRect(x, y, dx, dy);

  //Load Image
  var img = new Image();
  img.src = imgs;
  img.onload = function() {
  ctx .drawImage(
    img,
    x,
    y,
    dx,
    dy
  );
};
  
}

function rpgText(text,kolor,x,y) {
    
    var f = new FontFace('minecraft', 'url("/czcionki/minecraft_pl_font.woff")');
    document.fonts.add(f);
    var ctx = document.getElementById("ctx").getContext("2d");
    ctx.font="20px minecraft";
    

var story1 = {txt:text, 
             storycount:0,
             linecount:0,
             lineheight:18,
             xpos:x,
             ypos:y,
             startY:y,
             speed:1,
             animate:true,
             complete:false,
             storyarr:[]};
 
var animate = setInterval(doAnimation, 50);
var canvasWidth = 300;
var canvasHeight = 300;
story1.storyarr = getLines(ctx, story1.txt, 10, 500);
function doAnimation(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,200,canvasWidth, canvasHeight);
  ctx.fillStyle = kolor;
  /*ctx.clearRect(0,200,canvasWidth, canvasHeight); */
   
  animateTxt(story1,ctx); 
  }
  
   
  
  
}

function getLines(context, str, x, maxWidth) {
  var words = str.split(' ');
  var lineNumber = 0;
  var linesarr = [];
  var lineOfText = "";
  for(var n=0; n<words.length; n++) {
    var checkEndOfLine = lineOfText + words[n] + ' ';
    var checkTextWidth = context.measureText(checkEndOfLine);
    var textWidth = checkTextWidth.width;    
    
    if(textWidth > (maxWidth-10) ) {
      lineNumber++;
      lineOfText = words[n] + ' ';
    } else { 
      lineOfText = checkEndOfLine; 
    }
    linesarr[lineNumber] = lineOfText;
  }
  return linesarr;
} 

function animateTxt(story,context){
  if(story.animate){
   story.storycount+=story.speed;
   var storytxt = story.storyarr[story.linecount];
   story.ypos = story.startY + story.lineheight * story.linecount;
  if (story.storycount > storytxt.length-1){
    story.storycount = 0;
    story.linecount++;
    
    if(story.linecount > story.storyarr.length-1){
      //clearInterval(intervalID);
      story.animate = false;
      story.complete = true;
    }
  }
   //context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillText(storytxt.substr(0, story.storycount), story.xpos, story.ypos);  
  }
    //Write Out The Previous Lines Too  
    for(var i=0; i<story.storyarr.length; i++){
       if(i < story.linecount){
         context.fillText(story.storyarr[i], story.xpos, (story.startY + (story.lineheight*i)) ) ;
       }
    }  
}
    
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }



