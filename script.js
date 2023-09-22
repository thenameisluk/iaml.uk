var languages = ["pl", "en"];
var args = {};

function xorFlip(text,key="key"){
    var key_lenght = key.length
    var text_lenght = text.length
    var new_text = ""
    var key_at_ptr = 0
    for(let i=0;i<text_lenght;i++){
        if(key_at_ptr==key_lenght){
            key_at_ptr = 0
        }
        new_text += String.fromCharCode(text.charCodeAt(i)^key.charCodeAt(key_at_ptr))
    }
    key_at_ptr++
    return new_text;
}

function xorHash(text="test"){
    var bs = ""
    bs += text.slice(1)
    bs += text.slice(0,1)
    bs = xorFlip(bs,text.slice(text.charCodeAt(0)%text.lengt))
    return bs;
}
function createUrl(){
    var newUrl = window.location.pathname+"?"
    var first = true
    Object.keys(args).forEach(a=>{
        if(a==undefined||args[a]==undefined)return;
        if(!first)newUrl+="&"
        newUrl += a+"="+args[a]
        if(first)first=false
    })
    return newUrl;
}
function reffreshArgs(){
    window.location = createUrl();
}

loadArgs();
function loadArgs(){
    window.location.search.slice(1).split("&").forEach(a=>{
        arg = a.split("=")
        args[arg[0]] = arg[1]
    })
}


function typper(element,input = [""]){
    if(element==undefined)return;
    var letter = 0;
    var doc = 0;
    tp("")
    function tp(out){
        if(input.length==doc){
            return
        }
        if(letter==input[0].length){
            doc++
            letter = 0
        }else{
            out += input[0].charAt(letter);
            if(letter==input[0].length-1)element.innerHTML = out
            else element.innerHTML = out+"_"
            letter++
        }
        setTimeout(tp,100,out);
    }
}

document.querySelectorAll("typer").forEach(tp=>{
    typper(tp,[tp.innerHTML])
})

if(args.lang==undefined){
    if(languages.includes(navigator.language))
        args.lang = navigator.language
    else
        args.lang = "en"
    reffreshArgs()
}

function jitCSS(){
    var jit_css = ""
    languages.forEach(l=>{
        if(l!=args.lang){
            jit_css += l+"{\ndisplay: none;\n}\n"
        }
    })
    document.getElementById("jit").innerHTML = jit_css;
    updateUrl()
}

function dayOfYear(){
    //nie chciało mi się z tym bawić
    //https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

//var pfps = ["./obrazki/pfpA.png", "./obrazki/pfpB.png"];
//document.getElementById("pfp").src = pfps[dayOfYear()%pfps.length];


var warnin = false
function updateUrl(){
    if(window.history.replaceState){
        window.history.replaceState(null,null,createUrl())
    }else{
        if(!warnin){
            if(args.lang=="pl")
                alert("stara przeglądarka, może nie działać")
            else
                alert("old browser, may not work")
            warnin = true;
        }
        
    }
}

var ppl = {
    "\v\b\x00":"\x19L\x1EL\x18\x04\tL\x0E\t\x1F\x18@L\x00\x03\x1A\tL\x19✈﹣",
    "\x1B\b\x00":"\x14A\x13A\x06\x0E\x0E\x05A\x07\x13\b\x04\x0F\x05MA\x15\t\x19𧀬",
    "\x05\x16\x17\f\x00":"\vD\f\rHD\f\rD\x00\r\x00D\x11D\x03\v\x10D\f\x01\x16\x01[",
    "\x19\x07\x00":"\x15\t\x1F@L\x05\x18K\x1FL\x01\t𤌆"

}

function code(){
    var code = document.getElementById("code").value.toLowerCase();
    var out = document.getElementById("out")
    var hash = xorHash(code);
    if(ppl[hash]==undefined)
        out.innerHTML = "..."
    else
        out.innerHTML = xorFlip(ppl[hash],code)
}
function encodeX(text,key){
    return ('"'+xorHash(key)+'":"'+xorFlip(text,key)+'"')
}

function show(){
    document.querySelector("ywy").classList.add("show")
}
function hide(){
    document.querySelector("ywy").classList.remove("show")
}

jitCSS();