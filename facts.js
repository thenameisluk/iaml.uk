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
    'all facts : <a href="./facts.js">here</a>',
    "i kinda like this website",
    "have u seen the source code?",
    "do u like this website?",
    "funny how easy solutions in css are usually dumb",
    "my not formal dictionary :<p>ing shorten<\p><p>-ing -> -in<\p><p>-ings -> -ins<\p><p>word replacement<\p><p>hi -> hoi<\p><p>bye -> byo<\p><p>ok/k -> oke<\p><p>lmao/lol -> lul<\p><p>though -> thoe<\p><p>arbitrary to be shorten<\p><p>ex: will -> 'll or is ->'s<\p>",
	"i sometimes call umbreon blacky",
    "want code together?",
    "have a nice day",
    "my past ... zimny pot",
    "error 404",
    "i have 2 cats",
    "i have one dog",
    "there are 10 kinds of ppl, thoes who understand binary and thoes who don't",
    "SegFault is a way to close ur program",
    "glaceon is cool",
    "we have facts.lenght facts so far",
    "do u play minecraft?",
    "i like reinventing the wheel",
    "'m kinda blue accordin to \"surrounded by idiots\", cool book btw",
    "ask ur local umbreon for huggy for FREE!!!",
    "i forgo my dreams (don't think i had any), LgD was my priority",
	"i want to have IT related job",
    "'m still an amateur or have impostor syndrome",
    "ppl say 'm trust worth, i don't trust myself, the heck is wrong with them?",
    "u can get to know me better by refreshin this site",
    "i don't have favorite type of music",
    "undefined",
    "'m from Poland🇵🇱"
]

document.getElementById("fact").innerHTML = random(facts)