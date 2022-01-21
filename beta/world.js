var temp

//axxyyyd a-"a" x-kordy chunkowe x y-kordy chunko y d-wymiar 1-overworld
function getblock(x,y){
    //nie pewne chunki
    var chnpx = x/8;
    var restx = x%8;
    //pewny chunk
    chnpx = chnpx- restx/8;
    console.log(chnpx+","+restx);
    //nie pewne chunki
    var chnpy = y/8;
    var resty = y%8;
    //pewny chunk
    chnpy = chnpy- resty/8;
    console.log(chnpy+","+resty);
    //lecimy w prawy dół
    if(chnpx<=9) chnpx="0"+chnpx;
    if(chnpy<=9) chnpy="0"+chnpy;
    var blok = 1+resty*8+restx;
    console.log(blok);
    var bname = "a"+chnpx+chnpy;
    try{
       let r = window[bname];
       return r [blok]; 
    }
    catch{
        return "00000000000000000000z0000";
    }
    
    

}
function getoneblock(x,y,w){
    temp = getblock(x,y);

}
//1-10 to warstwy 11 to typ 12 to skrypt
function setblock(x,y,id,warsta){
    //nie pewne chunki
    var chnpx = x/8;
    var restx = x%8;
    //pewny chunk
    chnpx = chnpx- restx/8;
    console.log(chnpx+","+restx);
    //nie pewne chunki
    var chnpy = y/8;
    var resty = y%8;
    //pewny chunk
    chnpy = chnpy- resty/8;
    console.log(chnpy+","+resty);
    //lecimy w prawy dół
    if(chnpx<=9) chnpx="0"+chnpx;
    if(chnpy<=9) chnpy="0"+chnpy;
    var blok = 1+resty*8+restx;
    console.log(blok);
    var bname = "a"+chnpx+chnpy;
    temp = window[bname] [blok];
    if(warsta<11){
        var a = id*2;
        var b = id*2+1;
        console.log(a+","+b)
    }
    console.log(temp);
    window[bname] [blok]=temp;
    

    
    
    return r [blok];
    

}
function setblocka(x,y,ainput){
    //nie pewne chunki
    var chnpx = x/8;
    var restx = x%8;
    //pewny chunk
    chnpx = chnpx- restx/8;
    console.log(chnpx+","+restx);
    //nie pewne chunki
    var chnpy = y/8;
    var resty = y%8;
    //pewny chunk
    chnpy = chnpy- resty/8;
    console.log(chnpy+","+resty);
    //lecimy w prawy dół
    if(chnpx<=9) chnpx="0"+chnpx;
    if(chnpy<=9) chnpy="0"+chnpy;
    var blok = 1+resty*8+restx;
    console.log(blok);
    var bname = "a"+chnpx+chnpy;
    window[bname] [blok] = ainput;
    return r [blok];
    

}

function check(xxxx){
    var tmp = xxxx;
    return window["a"+tmp] [0];
}
//xxaabbtsss xx-górny blok aa-blok warswy bb-blok podstawy t-typ bloku s-000
//typy d-detektor(domyślnie o)(wykrywa graczy) t-otwarty włącznik funkcji g-zamknięty włącznik funkcji o-otwarty z-zamknięty s-skrzynia p-portal d-dialog
var a0000 = {0:"r",
1:"00000000000000000001o0000",2:"00000000000000000001o0000",3:"00000000000000000001o0000",4:"00000000000000000001o0000",5:"00000000000000000001o0000",6:"00000000000000000001o0000",7:"00000000000000000001o0000",8:"00000000000000000001o0000",
9:"00000000000000000001o0000",10:"00000000000000000001o0000",11:"00000000000000000001o0000",12:"00000000000000000001o0000",13:"00000000000000000001o0000",14:"00000000000000000001o0000",15:"00000000000000000001o0000",16:"00000000000000000001o0000",
17:"00000000000000000001o0000",18:"00000000000000000001o0000",19:"00000000000000000001o0000",20:"00000000000000000001o0000",21:"00000000000000000001o0000",22:"00000000000000000001o0000",23:"00000000000000000001o0000",24:"00000000000000000001o0000",
25:"00000000000000000001o0000",26:"00000000000000000001o0000",27:"00000000000000000001o0000",28:"00000000000000000001o0000",29:"00000000000000000001o0000",30:"00000000000000000001o0000",31:"00000000000000000001o0000",32:"00000000000000000001o0000",
33:"00000000000000000001o0000",34:"00000000000000000001o0000",35:"00000000000000000001o0000",36:"00000000000000000001o0000",37:"00000000000000000001o0000",38:"00000000000000000001o0000",39:"00000000000000000001o0000",40:"00000000000000000001o0000",
41:"00000000000000000001o0000",42:"00000000000000000001o0000",43:"00000000000000000001o0000",44:"00000000000000000001o0000",45:"00000000000000000001o0000",46:"00000000000000000001o0000",47:"00000000000000000001o0000",48:"00000000000000000001o0000",
49:"00000000000000000001o0000",50:"00000000000000000001o0000",51:"00000000000000000001o0000",52:"00000000000000000001o0000",53:"00000000000000000001o0000",54:"00000000000000000001o0000",55:"00000000000000000001o0000",56:"00000000000000000001o0000",
57:"00000000000000000001o0000",58:"00000000000000000001o0000",59:"00000000000000000001o0000",60:"00000000000000000001o0000",61:"00000000000000000001o0000",61:"00000000000000000001o0000",63:"00000000000000000001o0000",64:"00000000000000000001o0000"
}
