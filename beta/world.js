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
        return "000001o000";
    }
    
    

}
//1-3 to warstwy 4 to typ 5 to skrypt
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
    //do zrobienia
    /*do poprwy
    if(warsta=1) {
    temp.charAt(0) = id.charAt(0);
    temp.charAt(1) = id.charAt(1);
    }
    if(warsta=2) {
        temp.charAt(2) = id.charAt(0);
        temp.charAt(3) = id.charAt(1);
    }
    if(warsta=3) {
        temp.charAt(4) = id.charAt(0);
        temp.charAt(5) = id.charAt(1);
    }
    if(warsta=1) {
        temp.charAt(6) = id.charAt(0);
    }
    if(warsta=1) {
        temp.charAt(7) = id.charAt(0);
        temp.charAt(8) = id.charAt(1);
        temp.charAt(9) = id.charAt(2);
    }
    */
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
//typy d-detektor(domyślnie o)(wykrywa graczy) t-otwarty włącznik funkcji g-zamknięty włącznik funkcji o-otwarty z-zamknięty s-skrzynia p-portal
var a0000 = {0:"r",
1:"000001o000",2:"000001o000",3:"000001o000",4:"000001o000",5:"000001o000",6:"000001o000",7:"000001o000",8:"000001o000",
9:"000001o000",10:"000001o000",11:"000001o000",12:"000001o000",13:"000001o000",14:"000001o000",15:"000001o000",16:"000001o000",
17:"000001o000",18:"000001o000",19:"000001o000",20:"000001o000",21:"000001o000",22:"000001o000",23:"000001o000",24:"000001o000",
25:"000001o000",26:"000001o000",27:"000001o000",28:"000001o000",29:"000001o000",30:"000001o000",31:"000001o000",32:"000001o000",
33:"000001o000",34:"000001o000",35:"000001o000",36:"000001o000",37:"000001o000",38:"000001o000",39:"000001o000",40:"000001o000",
41:"000001o000",42:"000001o000",43:"000001o000",44:"000001o000",45:"000001o000",46:"000001o000",47:"000001o000",48:"000001o000",
49:"000001o000",50:"000001o000",51:"000001o000",52:"000001o000",53:"000001o000",54:"000001o000",55:"000001o000",56:"000001o000",
57:"000001o000",58:"000001o000",59:"000001o000",60:"000001o000",61:"000001o000",61:"000001o000",63:"000001o000",64:"000001o000"
}
