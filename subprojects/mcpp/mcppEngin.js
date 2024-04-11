
class rng{
    seed;
    mnum;
    constructor(sed){
        this.seed = sed
        this.mnum = sed;
    };
    getSeed(){
        return this.seed;
    }
    reset(){
        this.mnum = this.seed
    }
    r(to){
        //console.log(this.mnum);
        var x = this.mnum;
        //xorshift
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        this.mnum = x;
        return Math.abs((this.mnum%to))+1;
    }
};

var b_air = 0
var b_stone= 1
var b_dirt =2
var b_grass= 3
var b_snow_grass= 4
var b_wood= 5
var b_leaves =6
var b_bedrock= 7
var b_barier =8
var b_stone_coal =9
var b_stone_copper= 10
var b_stone_diamond =11
var b_stone_emerald=12
var b_stone_gold =13
var b_stone_iron =14
var b_stone_lapis =15
var b_stone_redstone =16
var b_deepslate= 17
var b_deepslate_coal =18
var b_deepslate_copper =19
var b_deepslate_diamond =20
var b_deepslate_emerald= 21
var b_deepslate_gold= 22
var b_deepslate_iron= 23
var b_deepslate_lapis =24
var b_deepslate_redstone =25
var b_netherrack =26
var b_netherrack_gold= 27
var b_netherrack_quartz =28
var b_netherrack_debre =29
var b_glowstone =30
var b_chest =31
var b_netherrack_red= 32
var b_wood_red =33
var b_leaves_red =34
var b_bush_red =35
var b_netherrack_blue= 36
var b_wood_blue =37
var b_leaves_blue= 38
var b_mushroom_blue= 39
var b_mushroom_red= 40
var b_soulsand= 41
var b_obsidian= 42
var b_lava= 43
var b_water= 44
var b_wool =45
var b_cobbledeepslate= 46
var b_cobblestone =47

var blocks = [
["air", b_air, "<:0:1012260493756465162>"],
["stone", b_stone, "<:0:1012260494880546819>"],
["dirt", b_dirt, "<:0:1012260496675717140>"],
["grass", b_grass, "<:0:1012260498202427422>"],
["snow_grass", b_snow_grass, "<:0:1012260499443953685>"],
["wood", b_wood, "<:0:1012260501104885900>"],
["leaves", b_leaves, "<:0:1012260502463852614>"],
["bedrock", b_bedrock, "<:0:1012260504229646376>"],
["barrier", b_barier, "<:0:1012260505831878706>"],
["s_coal", b_stone_coal, "<:0:1012260506830110771>"],
["s_copper", b_stone_copper, "<:1:1012260508239413260>"],
["s_diamond", b_stone_diamond, "<:1:1012260510093279232>"],
["s_emerald", b_stone_emerald, "<:1:1012260511565479977>"],
["s_gold", b_stone_gold, "<:1:1012260513247399977>"],
["s_iron", b_stone_iron, "<:1:1012260514740576296>"],
["s_lapis", b_stone_lapis, "<:1:1012260516711895060>"],
["s_redstone", b_stone_redstone, "<:1:1012260518280560660>"],
["deepslate", b_deepslate, "<:1:1012260519773745214>"],
["d_coal", b_deepslate_coal, "<:18:1012260521325645844>"],
["d_copper", b_deepslate_copper, "<:1:1012260522885906432>"],
["d_diamond", b_deepslate_diamond, "<:2:1012260524584611900>"],
["d_emerald", b_deepslate_emerald, "<:2:1012260526056808459>"],
["d_gold", b_deepslate_gold, "<:2:1012260527625482321>"],
["d_iron", b_deepslate_iron, "<:2:1012260528892153958>"],
["d_lapis", b_deepslate_lapis, "<:2:1012260530846695444>"],
["d_redstone", b_deepslate_redstone, "<:2:1012260532587335690>"],
["netherrack", b_netherrack, "<:2:1012260534030184528>"],
["n_gold", b_netherrack_gold, "<:2:1012260535540137984>"],
["n_quartz", b_netherrack_quartz, "<:2:1012260537062658068>"],
["n_debre", b_netherrack_debre, "<:2:1012260538576805948>"],
["glowstone", b_glowstone, "<:3:1012260540040630282>"],
["chest", b_chest, "<:3:1012260541726720080>"],
["n_red", b_netherrack_red, "<:3:1012260543442202684>"],
["wood_red", b_wood_red, "<:3:1012260545027653753>"],
["leaves_red", b_leaves_red, "<:3:1012260546755706970>"],
["bush_red", b_bush_red, "<:3:1012260551419760671>"],
["n_blue", b_netherrack_blue, "<:3:1012260553131036683>"],
["wood_blue", b_wood_blue, "<:3:1012260554750038088>"],
["leaves_blue", b_leaves_blue, "<:3:1012260556658462801>"],
["mushroom_blue", b_mushroom_blue, "<:3:1012260558369730600>"],
["mushroom_red", b_mushroom_red, "<:4:1012260560101965834>"],
["soulsand", b_soulsand, "<:4:1012260561817436190>"],
["obsidian", b_obsidian, "<:4:1012260563407077376>"],
["lava", b_lava, "<:4:1012260565009322084>"],
["water", b_water, "<:4:1012260566414405642>"],
["wool", b_wool,"<:4:1022580608683233280>"],
["cobbledeepslate", b_cobbledeepslate, "<:4:1035255821925363802>"],
["cobblestone", b_cobblestone, "<:4:1035255820067274762>"]
]
var b_none = -1;

var height;

var structures = [
    [5,6,[[b_none,b_leaves,b_leaves,b_leaves,b_none],
    [b_none,b_leaves,b_leaves,b_leaves,b_none],
    [b_leaves,b_leaves,b_leaves,b_leaves,b_leaves],
    [b_leaves,b_leaves,b_leaves,b_leaves,b_leaves],
    [b_none,b_none,b_wood,b_none,b_none],
    [b_none,b_none,b_wood,b_none,b_none]]]
];
var structures_nehert = [
    [5,6,[
        [b_none,b_leaves_red,b_leaves_red,b_leaves_red,b_none],
        [b_none,b_leaves_red,b_leaves_red,b_leaves_red,b_none],
        [b_leaves_red,b_leaves_red,b_leaves_red,b_leaves_red,b_leaves_red],
        [b_leaves_red,b_leaves_red,b_leaves_red,b_leaves_red,b_leaves_red],
        [b_none,b_none,b_wood_red,b_none,b_none],
        [b_none,b_none,b_wood_red,b_none,b_none]
]]
];

var rud =
    [
        [[0, 0], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], // 0
        [[0, 0], [0, 1], [1, 0], [1, 1], [0, 0], [0, 0], [0, 0], [0, 0]], // 1
        [[0, 0], [0, 1], [1, 0], [1, 1], [0, 2], [0, 0], [0, 0], [0, 0]], // 2
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], // 3
        [[1, 0], [0, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [1, 3]], // 4
        [[1, 0], [1, 1], [1, 2], [0, 1], [1, 1], [1, 1], [1, 1], [1, 1]]  // 5
];

var rudy = [
    [[0, 1, 2, 1, 0], 150, 7, b_stone_iron, b_deepslate_iron, 40],
    [[0, 1, 2, 1, 0], 150, 64, b_stone_iron, b_deepslate_iron, 40],
    [[2, 1, 2, 1, 1], 100, 32, b_stone_copper, b_deepslate_copper, 40],
    [[0, 1, 0, 1, 4], 92, 7, b_stone_lapis, b_deepslate_lapis, 30],
    [[1, 2, 3, 4, 1], 80, 7, b_stone_redstone, b_deepslate_redstone, 45],
    [[0, 1, 2, 1, 0], 150, 64, b_stone_coal, b_deepslate_coal, 45],
    [[0, 1, 3, 1, 0], 100, 7, b_stone_diamond, b_deepslate_diamond, 30],
    [[0, 1, 2, 1, 0], 150, 50, b_stone_gold, b_deepslate_gold, 35],
    [[3, 3, 3, 3, 3], 150, 7, b_stone_emerald, b_deepslate_emerald, 60]
];

function generateW(type,seed){
                var out = [];
                var random = new rng(seed);
                random.reset();
                function setBlock(x,y,b){
                    if(x<0||x>=64||y<0||y>=192)return;

                    out[x][y] = b
                }
                function getBlockId(x,y){
                    if(x<0||x>=64||y<0||y>=192)return b_barier;
                    return out[x][y]
                }
                function move(x,y){

                }
                function generate(x,y,sturct){
                    sturct[2].forEach((r,yr)=>{
                        r.forEach((b,xr)=>{
                            if(b!=-1)
                            setBlock(x+xr,y-yr+r.length,b);
                        })
                    })
                }
                function drawCircle(dx,dy,r,block,h,w){
                
                    var ax = dx;
                    var ay = dy;
                    var ar = r;
                    for(var i = 0;i<ar;i++){
                    var sqrtemp = Math.round(Math.sqrt(ar*ar-i*i));
                    for(var wi = 0;wi<Math.round(w);wi++){
                        for(var hi = 0;hi<Math.round(h);hi++){
                        mirrorP(ax,ay,Math.round(i*w)+wi,Math.round(sqrtemp*h)+hi,block);
                        for(var iyfill = 0;iyfill<Math.round(sqrtemp*h)+hi;iyfill++){
                        mirrorP(ax,ay,Math.round(i*w)+wi,(Math.round(sqrtemp*h)+hi)-iyfill,block);
                        }
                        mirrorP(ax,ay,Math.round(sqrtemp*w)+wi,Math.round(i*h)+hi,block);
                        for(var ixfill = 0;ixfill<Math.round(sqrtemp*w)+wi;ixfill++){
                        mirrorP(ax,ay,(Math.round(sqrtemp*w)+wi)-ixfill,Math.round(i*h)+hi,block);
                        }
                        }
                    }
                    
                    
                    }
                    setBlock(ax,ay,block);
                };
                function mirrorP(sx,sy,dx,dy,block){
                    setBlock(sx+dx,sy+dy,block);
                    setBlock(sx+dx,sy-dy,block);
                    setBlock(sx-dx,sy+dy,block);
                    setBlock(sx-dx,sy-dy,block);
                };
                switch (type)
                {
                case 0:{//overworld
                        height = 191
                        random.reset();
                        for(var iy = 0;iy<64;iy++){
                            out[iy] = [];
                        }
                        for(var ix = 0;ix<64;ix++){
                            for(var iy = 0;iy<192;iy++){
                                setBlock(ix,iy,b_air);
                            }
                        }
                        // bedrock 0-7
                        var help = random.r(7);
                        var help2 = 0;
                        for (var ix = 0; ix < 64; ++ix)
                        {
                            help2 = random.r(5);
                            if (help2 == 1 && help + 2 <= 7)
                                help = help + 2;
                            if (help2 == 2 && help + 1 <= 7)
                                help = help + 1;
                            if (help2 == 1 && help - 2 >= 1)
                                help = help - 2;
                            if (help2 == 1 && help - 1 >= 1)
                                help = help - 1;
                            for (var iy = 0; iy < help; ++iy)
                            {
                                setBlock(ix, iy, b_bedrock);
                            }
                        }
                        // deepslate
                        help = random.r(7);
                        for (var ix = 0; ix < 64; ++ix)
                        {
                            help2 = random.r(7);
                            if (help2 == 2 && help + 1 <= 7)
                                help = help + 1;
                            if (help2 == 1 && help - 1 >= 1)
                                help = help - 1;
                            for (var iy = 0; iy < help + 64; ++iy)
                            {
                                if (getBlockId(ix, iy) == b_air)
                                    setBlock(ix, iy, b_deepslate);
                            }
                        }
                        // stone + trawa +  drzewa +  woda + spawn
                        help = random.r(24);
                        for (var ix = 0; ix < 64; ++ix)
                        {
                            help2 = random.r(7);
                            if (help2 == 2 && help + 1 <= 24)
                                help = help + 1;
                            if (help2 == 1 && help - 1 >= 1)
                                help = help - 1;
                            for (var iy = 64; iy < help + 128; ++iy)
                            {
                                if (getBlockId(ix, iy) == b_air)
                                    setBlock(ix, iy, b_stone);
                            }
                            var fixed = help + 128;
                            if (fixed > 135)
                            {
                                setBlock(ix, fixed + 0, b_dirt);
                                setBlock(ix, fixed + 1, b_dirt);
                                setBlock(ix, fixed + 2, b_grass);
                                if (ix == 32)x = 32;
                                    
                                if (random.r(9) == 7)
                                {
                                    generate(ix-2,fixed+3,structures[0]);
                                    if (ix == 32)x = 32;
                                        
                                }
                            }
                            else
                            {
                                setBlock(ix, fixed + 0, b_dirt);
                                setBlock(ix, fixed + 1, b_dirt);
                                setBlock(ix, fixed + 2, b_dirt);
                                if (ix == 32)x= 32;
                                    
                                for (var iy = 128; iy < 135 + 4; ++iy)
                                {
                                    
                                    if (getBlockId(ix, iy) == b_air)
                                        setBlock(ix, iy, b_water);
                                }
                            }
                        }
                        // rudy
                        for (var i = 0; i < 9; ++i)
                        {
                            for (var ir = 0; ir < rudy[i][5]; ++ir)
                            {
                                var tx = random.r(62);
                                var ty = random.r(rudy[i][1] - rudy[i][2]) + rudy[i][2];
                                var v = rudy[i][0][random.r(5) - 1];
                                for (var pi = 0; pi < 8; ++pi)
                                {
                                    var ttx = rud[v][pi][0] + tx;
                                    var tty = rud[v][pi][1] + ty;
                                    if (getBlockId(ttx, tty) == b_stone)
                                        setBlock(ttx, tty, rudy[i][3]);
                                    if (getBlockId(ttx, tty) == b_deepslate)
                                        setBlock(ttx, tty, rudy[i][4]);
                                }
                            }
                        }

                        y=160;
                        move(0, -1);
                        break;
                }
                case 1:{//nether
                        height = 127
                        random.reset()
                        for(var sx = 0;sx<64;sx++){
                            out[sx] = [];
                        }
                        for (var seti = 0; seti < 128; seti++) {
                            for(var sx = 0;sx<64;sx++){
                                setBlock(sx,seti,b_netherrack);
                            }
                        }
                        //lava lake
                        var ll = random.r(4)+3;
                        for(var i = 0;i<ll;i++){
                            let s1 =  random.r(63);
                            let s2 =  random.r(100)+10
                            let s3 =  random.r(2)
                            let s4 =  random.r(2)+1
                            drawCircle(s1,s2,7,b_air,s3,s4)
                        };
                        for(var ix = 0;ix<64;ix++){
                        for(var iy = 0;iy<25;iy++){
                            if(getBlockId(ix,iy)==b_air)setBlock(ix,iy,b_lava);
                        }
                        }
                        var tx;
                        var ty;
                        //lava dots
                        var dots = random.r(100)
                        for(var i = 0;i<dots;i++){
                        ty = random.r(127);
                        tx = random.r(63);
                        if(getBlockId(tx,ty)==b_netherrack)setBlock(tx,ty,b_lava);
                        }
                        var red = true;
                        if(random.r(2)==1)red=false;
                        //grass and trees
                        for(var ix = 0;ix<64;ix++){
                        for(var iy = 0;iy<128;iy++){
                            if(red){
                            if(getBlockId(ix,iy)==b_netherrack){
                                if(getBlockId(ix,iy+1)==b_air){
                                setBlock(ix,iy,b_netherrack_red);
                                if(random.r(10)==3){
                                    setBlock(ix,iy+1,b_wood_red);
                                    setBlock(ix,iy+2,b_leaves_red);
                                    setBlock(ix+1,iy+2,b_leaves_red);
                                    setBlock(ix,iy+3,b_leaves_red);
                                    setBlock(ix-1,iy+2,b_leaves_red);
                                }
                                }
                            }
                            }else{
                            if(getBlockId(ix,iy)==b_netherrack){
                                if(getBlockId(ix,iy+1)==b_air){
                                setBlock(ix,iy,b_netherrack_blue);
                                if(random.r(7)==3){
                                    setBlock(ix,iy+1,b_wood_blue);
                                    setBlock(ix,iy+2,b_leaves_blue);
                                    setBlock(ix+1,iy+2,b_leaves_blue);
                                    setBlock(ix,iy+3,b_leaves_blue);
                                    setBlock(ix-1,iy+2,b_leaves_blue);
                                }
                                }
                            }
                            }
                            
                            if(getBlockId(ix,iy)==b_netherrack){
                            if(random.r(10)==4)
                            if(getBlockId(ix,iy-1)==b_air){
                                var di1 = random.r(3)
                                for(var i = 0;i<di1;i++){
                                var di2 = random.r(3)
                                for(var i2 = 0;i2<di2;i2++){
                                    setBlock(ix+i,iy-i2,b_glowstone);//glowstone
                                }
                                }
                            }
                            }
                        }
                        }
                        //quartz
                        for(var i = 0;i<25;i++){
                        tx = random.r(63);
                        ty = random.r(127);
                        var di1 = random.r(5)
                        for(var ix = 0;ix<di1;ix++){
                            var di2 = random.r(5)
                            for(var iy = 0;iy<di2;iy++){
                            if(getBlockId(tx+ix,ty+iy)==b_netherrack&&!(random.r(20)==3))setBlock(tx+ix,ty+iy,b_netherrack_quartz);
                            }
                        }
                        }
                        //debre
                        for(var i = 0;i<25;i++){
                        tx = random.r(63);
                        ty = random.r(127);
                        var di1 = random.r(2)
                        for(var ix = 0;ix<di1;ix++){
                            var di2 = random.r(2)
                            for(var iy = 0;iy<di2;iy++){
                            if(getBlockId(tx+ix,ty+iy)==b_netherrack&&!(random.r(20)==3))setBlock(tx+ix,ty+iy,b_netherrack_debre);
                            }
                        }
                        }
                        //gold
                        for(var i = 0;i<25;i++){
                        tx = random.r(63);
                        ty = random.r(127);
                        var di1 = random.r(7)
                        for(var ix = 0;ix<di1;ix++){
                            var di2 = random.r(7)
                            for(var iy = 0;iy<di2;iy++){
                            if(getBlockId(tx+ix,ty+iy)==b_netherrack&&!(random.r(10)==3))setBlock(tx+ix,ty+iy,b_netherrack_gold);
                            }
                        }
                        }
                        //bedrock
                        for(var i = 0;i<64;i++){
                            setBlock(i,0,b_bedrock);
                            setBlock(i,127,b_bedrock);
                        }
                        break;
                }
                case 2:{//custom
                        width = 9;
                        height = 9;
                        w = new block[9*9];
                }break;
                default:{
                        valid = false;
                        w = nullptr;
                }break;
                }
                return out;
}
function renderW(w,cid){//w1 w2
    /** @type {HTMLCanvasElement} */
    var canv = document.getElementById(cid);
    var ctx = canv.getContext("2d");
    canv.height = (height+1)*16;
    console.log(w);
    for(var y = 0;y<height+1;y++){
        for(var x = 0;x<64;x++){
            //try{
                if(w[x][y]!= b_barier)
                ctx.drawImage(imgs[w[x][y]],x*16,height*16-(y*16),16,16)
            //}catch{

            //}
            
        }
    }
}
function wtos(o){
    var out = "";
    for(var i = 0;i<192;i++){
        for(var i2 = 0;i2<64;i2++){
            out += o[i2][i] + ":";
        }
    }
    return out
}


function parseW(p){
    var c = "";
    var l = 0;
    var b = 0;
    var out = [];
    for(var i = 0;i<64;i++){
        out[i] = [];
    }
    for(var i = 0;i<p.length;i++){
        if(p.charAt(i)!=":"){
            c+=p.charAt(i)
        }else{

            out[b][l] = c*1;
            c = "";
            b++
            if(b==64){
                l++
                b=0;
            }
        }
    }
    return out
}
function controlTest(s1,s2){
    var total = 0;
    var corr = 0;
    for(var i = 0;i<s1.length;i++){
        total++;
        if(s1.charAt(i)==s2.charAt(i)){
            corr++
        }//else console.log(s1.charAt(i)+":"+s2.charAt(i)+":"+i)
    }
    return corr/total
}

function getemojiUrl(id) {
    return "https://cdn.discordapp.com/emojis/" + id + ".png";
}
// emoji
function EmojiToId(emoji) {
  return emoji.slice(emoji.length - 20, emoji.length - 1);
}
var imgs = [];
var todo = 0;
var done = 0;
blocks.forEach(b => {
    todo++;
    var url = getemojiUrl(EmojiToId(b[2]));
    //console.log(url);
    fetch(url).then((r) => {
      var img = new Image();
      img.src = url;
      img.onload = function () {
        imgs[b[1]] = img;
        done++;
        if (done == todo) start();
      };
    });
  });
var dimension = 0
function start(){
    
    regenerate()
}
function regenerate(){
    try{
        var w = generateW(dimension,document.getElementById("seed").value)
        renderW(w,"w1")
    }catch{
        
    }
    
}
document.getElementById("seed").addEventListener("change",v=>{
    regenerate();
})
function rw(t){
    switch (t) {
        case 0:
            select("oww")
            unselect("ntw")
            dimension = 0;
            regenerate();
            break;
        case 1:
            unselect("oww")
            select("ntw")
            dimension = 1;
            regenerate();
            break;
    }
}