
/*wkrótce*/

const container = document.querySelector(".pojemnik")
fetch('https://luktvpl.github.io/Dokumenty/Podstrony.json')
  .then(response => response.json())
  .then(data => {
const coffees = data.ps


  let output = ""
  coffees.forEach(
    function ({ name, image, link, nt }) {
      if(nt==true){
        return (output += `
                <div class="itemSZ"  >
                  <img src="${image}" alt="Obrazek" class="itemIMGL"/>
                  <tytul >${name}</tytul>
                  <a class="guzik" href="${link}" target="_blank">klik</a>
                </div>
                `)
      }else{
        return (output += `
                <div class="itemSZ"  >
                  <img src="${image}" alt="Obrazek" class="itemIMGL"/>
                  <tytul >${name}</tytul>
                  <a class="guzik" href="${link}" >klik</a>
                </div>
                `)
      }
      
    }
  )
  container.innerHTML = output

});
//caches.keys().then(c=>c.forEach(cc=>caches.delete(cc)))
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
var ws = new WebSocket("wss://luknet.duckdns.org:3306");
//var ws = new WebSocket("ws://localhost:3306");
var userdata;

//konta
var user;
try {
var st = document.getElementById("st");
var space = document.getElementById("acc");
st.innerHTML = '<b>status : offline</b>';
}catch{

}
var ssid

ws.addEventListener("open", () => {
  st.innerHTML = '<p><b>status : online</b></p>';
  console.log("połączono");
  if(getCookie("ifssid")=="true") {
    ws.send("ssid:"+getCookie("ssid"))
    lpage();
  } else {
    ws.send("g:ssid");
  }
  ws.addEventListener("message", msg => {
    alert(msg.data);
    var command = msg.data.toString().split(":");
    
    var mcmd = command[0];
    
    switch (command[0]){
      case "e" :
        lserror(command[1]);
      break
      case "g" :
        alert(command[1])
        if(command[1]=="MailCode") activationpage(command[2])
      break
      case "ssid":
        setCookie("ifssid","true",3600);
        setCookie("ssid",command[1],3600);
        ws.send("ssid:"+command[1])
      break
      case '{"username"':
        user = JSON.parse(msg.data)
        alert("userdata collected")
      break
    }
    ws.addEventListener("close",()=>lserror("rozłączono od serwera"))
    
    

})})
//acc
function lpage() {
  space.innerHTML = '<p><b><div class="input-container"><input type="text" id="login" required=""/><label>login</label></div></b></p><p><b><div class="input-container"><input type="password" id="password" required=""/><label>hasło</label></div></b></p><div id="error" class="error"></div><p><button onclick="login()" class="button-3">zaloguj</button><button onclick="rpage()" class="button-3">zarejestruj</button></p>';
}
function rpage() {
  space.innerHTML = '<p><b><div class="input-container"><input type="text" id="login" required=""/><label>login</label></div></b></p><p><b><div class="input-container"><input type="text" id="mail" required=""/><label>e-mail</label></div></b></p><p><b><div class="input-container"><input type="password" id="password" required=""/><label>hasło</label></div></b></p><p><b><div class="input-container"><input type="password" id="password2" required=""/><label>powtórz hasło</label></div></b></p><div id="error" class="error"></div><p><button onclick="lpage()" class="button-3">zaloguj</button><button onclick="register()" class="button-3">zarejestruj</button></p>';
  
}
function activationpage(mail) {
  try {
    var maili = document.getElementById("mail").value;
  } catch {
    var maili = mail
  }
  
  space.innerHTML = '<p>podaj kod wysłany na adres email ('+maili+')</p><p>w przypadku odłączenia od serwera odśwież strone</p><p><b><div class="input-container"><input type="text" id="kod" required=""/><label>kod</label></div></b></p><p><div id="error" class="error"></div></p><p><button onclick="vmail()" class="button-3">zweryfikuj</button></p>'
}
function vmail() {
  var kodi = document.getElementById("kod").value;
  ws.send("ec:"+kodi);
}
function login() {
  var logini = document.getElementById("login").value;
  var passwordi = document.getElementById("password").value;
  ws.send("l:"+logini+":"+passwordi);
}
function register() {
  var logini = document.getElementById("login").value;
  var passwordi = document.getElementById("password").value;
  var password2i = document.getElementById("password2").value;
  var maili = document.getElementById("mail").value;

      if(passwordi==password2i) {
        
        var ms = "r:"+logini+":"+passwordi+":"+maili
        ws.send(ms);
      } else lserror("hasła muszą być takie same")
      //rejestracja
      
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