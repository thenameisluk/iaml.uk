
/*wkrótce*/
const container = document.querySelector(".pojemnik")
const coffees = [
  { name: "Moje kanały", image: "/obrazki/miniaturki/my_chanals.webp", link: "/podstrony/my_chanals.html" },
  { name: "Beta RPG", image: "/obrazki/miniaturki/rpg.webp", link: "/beta/index.html" },
  { name: "Animowany Luk", image: "/obrazki/miniaturki/luk_kukła.webp", link: "/podstrony/luk_kukla.html" },
  { name: "Czarna lista", image: "/obrazki/miniaturki/black_list.webp", link: "/podstrony/black_list.html" }
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    function ({ name, image, link }) {
      return (output += `
                <div class="itemSZ">
                  <img src="${image}" alt="Obrazek" class="itemIMGL"/>
                  <tytul>${name}</tytul>
                  <a class="guzik" href="${link}">klik</a>
                </div>
                `)
    }
  )
  container.innerHTML = output

}
document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
function test() {
  alert("hej")
}
/*manipulacja plikami cookie*/
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//websocket

const ws = new WebSocket("wss://luknet.duckdns.org:3306");



//konta
try {
var st = document.getElementById("st")
var space = document.getElementById("acc");
}catch{

}
st.innerHTML = '<b>status : offline</b>';
ws.addEventListener("open", () => {
  st.innerHTML = '<p><b>status : online</b></p>';
  console.log("połączono")
  ws.send("i:acc");
  ws.addEventListener("message", msg => {
    var command = msg.data.split(":")
    if(msg.data="g:id"){
      if(getCookie("reg")=="y"){
      ws.send("id:"+getCookie("uuid"))
    }else{
      ws.send("c:id");
      
    }
    }
    if(command[0]=="id"){
        alert("dostałęś własne id");
        setCookie("reg","y",3600)
        setCookie("uuid",command[1],3600)
    }
    
  })
  ws.addEventListener("close", lol => {
    st.innerHTML = '<b>status : offline</b>';
  })
})

//cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}