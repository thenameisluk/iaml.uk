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