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

window.location.search.slice(1).split("&").forEach(a=>{
    arg = a.split("=")
    args[arg[0]] = arg[1]
})

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

function log(dt){
    console.log(dt);
    document.querySelectorAll("logger").forEach(l=>{
        l.innerHTML = dt
    })
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

var pages = ["p1","p2","p3","p4"]
var page_now = 2;

var projects = ["pr1","pr2","pr3","pr4"];
var project_now = 1;
function jitCSS(){
    if(isNaN(page_now))page_now=0;
    if(isNaN(project_now))project_now=0;
    var page=pages[page_now]
    var project = projects[project_now]
    var jit_css = ""
    languages.forEach(l=>{
        if(l!=args.lang){
            jit_css += l+"{\ndisplay: none;\n}\n"
        }
    })
    pages.forEach(p=>{
        if(p!=page){
            jit_css += p+"{\ndisplay: none;\n}\n"
        }
    })
    projects.forEach(pro=>{
        if(pro!=project){
            jit_css += pro+"{\ndisplay: none;\n}\n"
        }
    })
    document.getElementById("jit").innerHTML = jit_css;
    updateUrl()
}

function load(p){
    args.page = p
    page_now = p
    jitCSS()
}

function toggleLang(){
    args.lang = languages[(languages.indexOf(args.lang)+1)%languages.length]
    jitCSS()
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

var pfps = ["./obrazki/pfpA.png", "./obrazki/pfpB.png"];
document.getElementById("pfp").src = pfps[dayOfYear()%pfps.length];


//this is private but it's nothin u can capitalize on(love letters and thanks to friends)
//u decide if it's worth ur time to decode (have fun)
var secret = {
    "\v\b\x00":"\x19L\r\x1E\tL\x01\x15L\x0E\t\x1F\x18L\n\x1E\x05\t\x02\b@L\x00\x03\x1A\tL\x19L✈﹣",
    "\x1B\x19\x00":'\x01T\x06T\x13\x1B\x1B\x10T\x12\x06\x1D\x11\x1A\x10T\x1DT\x13\x01\x11\x07\x07XT\x12\x01\x1A\x1A\rT\x01T\x06T\x1C\x11\x06\x11',
    "\x1A\x01\x00":'\x06S\x01S\x1D\x1A\x10\x16S\x14\x06\n_S\x14\x1C\x1C\x17S\x15\x01\x1A\x16\x1D\x17_S\x07\x1B\x1C\x16S\x00\x1C\x1E\x16\x07\x1A\x1E\x16\x00S\x06\x1D\x12\x05\x12\x1A\x1F\x12\x11\x1F\x16',
    "\v\t\x01\x00":'\x03J\x06\x03\x01\x0FJ\x1A\x06\v\x13\x03\x04J\x1D\x03\x1E\x02J\x1FJ\x04\x05J\x07\v\x1E\x1E\x0F\x18J\x03\fJ\x03\x1EM\x19J\x1F\x04\x03\x1E\x0FJ\x05\x18J\x0E\x03\x19\t\x05\x18\x0EJ\v\t\x1E\x03\x1C\x03\x1E\x03\x0F\x19',
    "\x05\x19\x0F\x1A\x02\x00":'\x04\x0F\x1C\x0F\x18J\x0F\x12\x1A\x0F\t\x1E\x0F\x0EJ\x1FJ\x02\x0F\x18\x0FFJ\x06\x1F\x06',
    "\x19\x07\x00":'\x18\r\x07L\x18\x03L\x06\rLAL\x15\t\x1FL\x05\x18K\x1FL\x01\t'
}

function worngCode(){
    document.getElementById("secret").innerHTML = '';
    var red = document.createElement("red")
    document.getElementById("secret").appendChild(red)
    if(args.lang=="pl")
        typper(red,["zły kod"])
    else
        typper(red,["wrong code"])
    

}
function tryLoadSecret(){
    var code = document.getElementById("code").value;
    if(secret[xorHash(code)]==undefined||code==""){
        worngCode()
        return;
    }
    typper(document.getElementById("secret"),[xorFlip(secret[xorHash(code)],code)]);
}
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

function nextProj(){
    project_now++
    project_now%=projects.length
    args.proj = project_now
    jitCSS()
}

function prevProj(){
    project_now--
    if(project_now<0)project_now=projects.length-1
    args.proj = project_now
    jitCSS()
}

project_now = parseInt(args.proj)

if(args.page==undefined)
    load(0)
else
    load(args.page=parseInt(args.page))

console.log("hej co tu robisz?")