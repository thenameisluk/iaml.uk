//sup, how r u?

function random(arr=[]){
    return arr[Math.floor(Math.random()*arr.length)]
}

var facts = [
    "I've been glaceon,leafeon and umbreon",
    "green used to be my favoirite color",
    "have u clicked eevee?",
    "want to be friends?",
    "...",
    'all facts : <a href="./facts.js">here</a>'
]

document.getElementById("fact").innerHTML = random(facts)