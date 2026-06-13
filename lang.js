function setlang(lang){
    if(!['pl','en'].includes(lang)){
	setlang('en')
	return;
    }
    
    document.body.setAttribute('language',lang)
    localStorage.setItem("lang",lang)
}

document.querySelectorAll("[setlang]").forEach(
    el=>el.addEventListener("click",()=>{
	setlang(el.getAttribute("setlang"))
    }
  )
)


if(localStorage.getItem("lang")){
    setlang(localStorage.getItem("lang"))
}else setlang(navigator.language.slice(0,2))


