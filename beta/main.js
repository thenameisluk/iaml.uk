

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
/*funkcje rendrowania*/
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
    
    
    var ctx = document.getElementById("ctx").getContext("2d");
    
  ctx.fillStyle = "black";
  ctx.fillRect(0,200,300, 300);
  var f = new FontFace('minecraft', 'url("/czcionki/minecraft_pl_font.woff")');
  ctx.fillStyle = kolor;
  f.load().then(function(font) {
    
    document.fonts.add(f);
    ctx.font="20px minecraft";
    var atext = "";
    for (var i = 0; i < text.length; i=i++) {
      atext = atext+text.charAt(i);
      ctx.fillText(atext,x,y);
    }
    
    
  });
  
   
}


