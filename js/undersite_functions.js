function black_list(){
    var bl = document.getElementById("black_list")
    fetch("./json/data/black_list.json").then(r=>r.json().then(j=>{
        var ou = ""
        j.list.forEach(ss=>{
            ou+='<p class="b">'+ss.name+'</p><p>'+ss.reason+'</p>'
        })
        document.getElementById("black_list").innerHTML = ou;
    }))
}
function hack(){
    var bl = document.getElementById("hack")
    fetch("./json/data/Cheaty.json").then(r=>r.json().then(j=>{
        var ou = ""
        ou +="<p>"+j.opis.lvl3+"</p>"
        j.lvl3.forEach(che =>{
            ou += "<p>-"+che.name+"-"+che.cheat+"-"+che.client+"</p>"
        })
        bl.innerHTML = ou;
        ou +="<p>"+j.opis.lvl2+"</p>"
        j.lvl2.forEach(che =>{
            ou += "<p>-"+che.name+"-"+che.cheat+"-"+che.client+"</p>"
        })
        bl.innerHTML = ou;
        ou +="<p>"+j.opis.lvl1+"</p>"
        j.lvl1.forEach(che =>{
            ou += "<p>-"+che.name+"</p>"
        })
        bl.innerHTML = ou;
    }))
}