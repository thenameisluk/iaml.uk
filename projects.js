var projects = [
    {
        title:"Dark Os",
        image:"do.png",
        url:"https://github.com/LukIsHere/DarkOS"
    },
    {
        title:"dsl",
        image:"dsl.png",
        url:"https://github.com/LukIsHere/dsl"
    },
    {
        title:"gra w zycie",
        image:"gwz.png",
        url:"https://github.com/LukIsHere/graWzycie"
    },
    {
        title:"skill issue",
        image:"si.png",
        url:"https://github.com/LukIsHere/Skill-Issue"
    }
]

var project = 0;
var inpProggress = false;

function prevProj(){
    if(inpProggress)
        return;
    inpProggress = true;
    
    var picA = document.getElementById("projA")
    var picB = document.getElementById("projB")

    picA.classList = "img40"
    picB.classList = "img40h"

    picA.setAttribute("src","./obrazki/proj/"+projects[project].image)
    
    project--;
    if(project<0)
        project=projects.length-1;

    document.getElementById("proj-title").innerHTML = projects[project].title
    document.getElementById("proj-link").setAttribute("href",projects[project].url)
    picB.setAttribute("src","./obrazki/proj/"+projects[project].image)

    picA.classList.toggle("img40away")
    picB.classList.toggle("img40in")
    setTimeout(()=>{
        inpProggress=false;
        picA.classList = "img40h"
        picB.classList = "img40"
    },300);
}

function nextProj(){
    if(inpProggress)
        return;
    inpProggress = true;
    
    var picB = document.getElementById("projA")
    var picA = document.getElementById("projB")

    picA.classList = "img40"
    picB.classList = "img40h"

    picA.setAttribute("src","./obrazki/proj/"+projects[project].image)
    
    project++;
    if(project>=projects.length)
        project=0;

    document.getElementById("proj-title").innerHTML = projects[project].title
    document.getElementById("proj-link").setAttribute("href",projects[project].url)
    picB.setAttribute("src","./obrazki/proj/"+projects[project].image)

    picA.classList.toggle("img40away")
    picB.classList.toggle("img40in")
    setTimeout(()=>{
        inpProggress=false;
        picA.classList = "img40h"
        picB.classList = "img40"
    },300);
}

//nextProj()