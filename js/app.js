
/*wkrótce*/
const container = document.querySelector(".pojemnik")
const coffees = [
  { name: "Test", image: "obrazki/firmowe/luktvpl min.png", link:"/index.html" },
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
    window.addEventListener("load", function() {
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
