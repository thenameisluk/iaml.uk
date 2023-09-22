function random(arr=[]){
    return arr[Math.floor(Math.random()*arr.length)]
}

var facts = [
    "I've been glaceon,leafeon and umbreon",
    "green used to be my favoirite color",
    "have u clicked eevee?",
    "want to be friends?",
    "this is a fact"
]

document.getElementById("fact").innerHTML = random(facts)