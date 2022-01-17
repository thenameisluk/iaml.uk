

function start(){
  var ctx = document.getElementById("ctx").getContext("2d");
  ctx.fillStyle = "gray";
  ctx.fillRect(0,200,300, 300);
    
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
    
    rpgText("trochę napracowałem się nad tym tekstem. więc zacznij go lepiej podziwiać bo to naprawdę potężny projekt","white",3,20);
    var x = document.getElementById("in").value;
    console.log(x);
    

    
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
    
    
    var ctx2 = document.getElementById("ctx2").getContext("2d");
    
  ctx2.fillStyle = "gray";
  ctx2.fillRect(0,0,300, 100);
  var f = new FontFace('minecraft', 'url("/czcionki/minecraft_pl_font.woff")');
  ctx2.fillStyle = kolor;
  f.load().then(function(font) {
    
    document.fonts.add(f);
    ctx2.font="30px minecraft";
    var atext = "";
    i = 0
    add(text,atext,i,x,y);
    function add(text,atext,i,x,y){
    
    atext = atext+text.charAt(i);
    ctx2.fillText(atext,x,y);
    console.log(atext);
    i++
    ai=text.length;
    console.log(ai)
    if(i!=ai){
      var atextl = atext.length;
      if(atextl>27) 
      {
        if(text.charAt(atextl-1)!=" "&&text.charAt(atextl)!=" ")ctx2.fillText(atext+"-",x,y);
        atext=""
        
        y=y+20;
      }
      setTimeout(() => {
        add(text,atext,i,x,y)
      }, 100);
      
    }
    }
    
    
  });
  
   
}


