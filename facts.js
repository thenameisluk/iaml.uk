//sup, how r u?

function random(arr=[]){
    return arr[Math.floor(Math.random()*arr.length)]
}

var facts = [
    "green used to be my favoirite color",
    "...",
    "do u like this website?",
    "funny how easy solutions in css are usually dumb",
    "have a nice day",
    "my past ... zimny pot",
    "error 404",
    "i have 2 cats",
    "i have one dog",
    "SegFault is a way to close ur program",
    "we have facts.lenght facts so far",
    "i like reinventing the wheel",
    "'m kinda blue accordin to \"surrounded by idiots\", cool book btw",
    "ask ur local umbreon for huggy for FREE!!!",
    "u can get to know me better by refreshin this site",
    "i don't have favorite type of music",
    "undefined",
    "'m from Poland🇵🇱"
]

document.getElementById("fact").innerHTML = random(facts)