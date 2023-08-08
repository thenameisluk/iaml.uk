var projects = [
    {
        title:"OwO",
        image:"dsl.png",
        url:"./index.html"
    },
    {
        title:"Dark Os",
        image:"do.png",
        url:"./index.html"
    }
]

var project = 0;



function nextProj(){
    console.log("hi")
    var title = document.getElementById("proj-title")
    var img = document.getElementById("proj-img")
    var link = document.getElementById("proj-link")

    project++;
    if(project>=projects.length)
        project=0;
    title.innerHTML = projects[project].title
    img.setAttribute("src","./obrazki/proj/"+projects[project].image)
    link.setAttribute("href",projects[project].url)
}