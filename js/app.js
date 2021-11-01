
const container = document.querySelector(".container")
const coffees = [
  { name: "tarcza lisek", image: "images/zegarek/fox.webp", link:"subsite/lisek_tarcza.html" },
  { name: "Polskie SMP 2", image: "images/index/polskie_smp.png", link:"subsite/Polskie_SMP_2.html" },
  { name: "Mój pakiet emoji", image: "images/emoji/1.0/demo.gif", link:"subsite/Emoji.html" },
  { name: "serwery java na bedrocku", image: "images/index/java-bedrock.webp", link:"subsite/geyser.html" },
  { name: "Addon", image: "images/index/addon.png", link:"subsite/addon.html" },
  { name: "minecraft za free", image: "images/index/bedrock.jpg", link:"subsite/freemc.html" },
  { name: "Polskie SMP 1", image: "images/index/polskie_smp.png", link:"subsite/Polskie_SMP.html" },
  { name: "pasjans (google)", image: "images/index/pasjans.png", link:"pasjans/index.html" },
  { name: "test", image: "images/index/test.webp", link:"subsite/template.html" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      function ({ name, image, link }) {
        return (output += `
                <div class="card">
                  <img class="card--avatar" alt="obrazek" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="${link}">klik</a>
                </div>
                `)
      }
    )
    container.innerHTML = output
    
    }
    window.onload = nav();
    function nav() {
    document.getElementById("one").innerHTML = "Główny";
    document.getElementById("one").href = "/index.html";
    document.getElementById("two").innerHTML = "O mnie";
    document.getElementById("two").href = "/me.html";
    document.getElementById("tree").innerHTML = "Polskie SMP";
    document.getElementById("tree").href = "/subsite/Polskie_SMP.html";
    document.getElementById("four").innerHTML = "Podzięki";
    document.getElementById("four").href = "/subsite/Podziękowania.html";
    document.getElementById("five").innerHTML = "";
    document.getElementById("five").href = "";
    let d = getCookie("d")
    if (d = "")
    {
      setCookie("d","true","36500")
    } else if (d = "true") {
      dark();
    } else if (d = "false") {
      light();
    } else {
      setCookie("d","true","36500")
    }
  }
  function M() {
    let d = getCookie("d")
    if (d = "true") {
      light();
      setCookie("d","false","36500")
    } else {
      dark();
      setCookie("d","true","36500")
    }
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
  /* funkcje */
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
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
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function dark() {
    document.getElementById("logo").src = "images/index/luk M.gif";
    document.getElementById("css").href = "css/style d.css";
  }
  function light() {
    document.getElementById("logo").src = "images/index/luk M+d.gif";
    document.getElementById("css").href = "css/style.css";
  }