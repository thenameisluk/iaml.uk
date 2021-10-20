const container = document.querySelector(".container")
const coffees = [
  { name: "minecraft bedrock za darmo", image: "images/index/bedrock.jpg", link:"subsite/freemc.html" },
  { name: "tarcza lisek", image: "images/zegarek/fox.webp", link:"subsite/lisek_tarcza.html" },
  { name: "serwery java na bedrocku", image: "images/index/java-bedrock.png", link:"subsite/geyser.html" },
  { name: "Polskie SMP", image: "images/index/polskie_smp.png", link:"subsite/Poslkie_SMP.html" },
  { name: "Addon", image: "images/index/addon.png", link:"subsite/addon.html" },
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
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }