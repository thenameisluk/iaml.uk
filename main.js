let title = document.querySelector("title")

document.addEventListener("focus",()=>{
    title.innerHTML = "Hi :3"
})

document.addEventListener("blur",()=>{
    title.innerHTML = "Bye ;-;"
})

let sky = document.querySelector("sky")

function restar(){
    let plepmount = Math.round(window.innerWidth*window.innerHeight/3000)

    sky.innerHTML = "";

    for(var i = 0;i<plepmount;i++){
        let star = document.createElement("star")
        
        sky.appendChild(star)

        switch (Math.round(Math.random()*12)) {
            case 3:
                setTimeout((star)=>{star.classList.add("blinking")},Math.round(Math.random()*2000),star)    
                break;
            case 4:
                setTimeout((star)=>{star.classList.add("pleping")},Math.round(Math.random()*2000),star)    
                break;
        }

        star.style.top = Math.round(window.innerHeight*Math.random())+"px"
        star.style.left = Math.round(window.innerWidth*Math.random())+"px"
        
        
    }
    
}

window.addEventListener("resize",restar)
restar()

document.querySelector("cpr").innerHTML = "© luk 2024"

