typper(document.getElementById("hello"),["hej jestem luk"])
typper(document.getElementById("hellow"),["luk'a głupie projekty"])
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
            element.innerHTML = out+"_"
            letter++
        }
        setTimeout(tp,100,out);
    }
}