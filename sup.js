function sup(el){
    let old = document.getElementById("yo")
    if(old){
        old.classList.remove("yo")
        old.id = ""
    }

    el.classList.add("yo")
    el.id = "yo"
}