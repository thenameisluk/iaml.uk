
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
var user;
try {
var st = document.getElementById("st");
var space = document.getElementById("acc");
}catch{

}
st.innerHTML = '<b>status : offline</b>';
ws.addEventListener("open", () => {
  st.innerHTML = '<p><b>status : online</b></p>';
  console.log("połączono");
  if(getCookie("logged")==true) {
    ws.send("l:"+getCookie("uuid"));
  } else {
    lpage();
  }
  ws.addEventListener("message", msg => {
    var command = msg.toString().split(":");
    if(msg.toString().charAt[0]="{") {
      user = JSON.parse(msg.toString());
    }
    if(command[0]==e) {
      lserror(msg.toString());
    }
    
})})
//acc
function lpage() {
  space.innerHTML = '<p><b><div class="input-container"><input type="text" id="login" required=""/><label>login</label></div></b></p><p><b><div class="input-container"><input type="password" id="password" required=""/><label>hasło</label></div></b></p><div id="error" class="error"></div><p><button onclick="login()" class="button-3">zaloguj</button><button onclick="rpage()" class="button-3">zarejestruj</button></p>';
}
function rpage() {
  space.innerHTML = '<p><b><div class="input-container"><input type="text" id="login" required=""/><label>login</label></div></b></p><p><b><div class="input-container"><input type="text" id="mail" required=""/><label>e-mail</label></div></b></p><p><b><div class="input-container"><input type="date" id="data" required=""/><label>data urodzenia</label></div></b></p><p><b><div class="input-container"><input type="password" id="password" required=""/><label>hasło</label></div></b></p><p><b><div class="input-container"><input type="password" id="password2" required=""/><label>powtórz hasło</label></div></b></p><div id="error" class="error"></div><p><button onclick="lpage()" class="button-3">zaloguj</button><button onclick="register()" class="button-3">zarejestruj</button></p>';
}
function login() {
  var logini = document.getElementById("login").value;
  var passwordi = document.getElementById("password").value;
  ws.send("l:"+logini+":"+passwordi);
}
function register() {
  if(logini.length>=5) {
    if(passwordi.length>=8) {
      //rejestracja

    } else {
      lserror("zbyt krótkie hasło")
    }
    
  }else{
    lserror("zbyt krótki login")
  }
}
function lserror(lserror)  {
  document.getElementById("error").innerHTML = lserror
}
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
//input
let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})