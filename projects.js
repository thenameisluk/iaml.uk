var projects = [
    {
        title:"Dark OS",
        image:"do.png",
        url:"https://github.com/LukIsHere/DarkOS"
    },
    {
        title:"DSL",
        image:"dsl.png",
        url:"https://github.com/LukIsHere/dsl"
    },
    {
        title:"Gra w zycie",
        image:"gwz.png",
        url:"https://github.com/LukIsHere/graWzycie"
    },
    {
        title:"Skill Issue",
        image:"si.png",
        url:"https://github.com/LukIsHere/Skill-Issue"
    }
]

function load(id){
    document.getElementById("projs").querySelectorAll("img").forEach((im,i)=>{
        if(i!=id)
            im.classList.remove("hover")
        else 
            im.classList.add("hover")
    })
    document.getElementById("proj").innerHTML = projects[id].title
    document.getElementById("proj-link").setAttribute("href",projects[id].url)
    document.getElementById("projsc").classList.add("hover")
}