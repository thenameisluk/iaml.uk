let blogId = window.location.toString().split("/")[4]*1

let isPrevB = true
let prevB = "../"+(blogId-1)+"/"
let isNextB = false
let nextB = "../"+(blogId+1)+"/"


function nextBlog(){
    if(isNextB)
        window.location = nextB
}

function prevBlog(){
    if(isPrevB)
        window.location = prevB
}

fetch(prevB).then((r)=>{
    if(r.status==200)
        isPrevB = true
})

fetch(nextB).then((r)=>{
    if(r.status==200)
        isNextB = true
})