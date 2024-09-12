let title = document.querySelector("title")

document.addEventListener("focus",()=>{
    title.innerHTML = "Hi :3"
})

document.addEventListener("blur",()=>{
    title.innerHTML = "Bye ;-;"
})