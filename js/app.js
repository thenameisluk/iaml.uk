
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