var intOff = document.getElementById("intOff")
var lampOff = document.getElementById("lampOff")
var intOn = document.getElementById("IntOn")
var lampOn = document.getElementById("LampOn")
var body = document.getElementById("body")
function lampadaOn (){
    lampOff.style.display = 'none'
    intOff.style.display = 'none'
    lampOn.style.display = 'inline-flex'
    intOn.style.display = 'inline-flex'
    body.style.backgroundColor = "white"
    console.log(x)
    }

intOff.addEventListener ('click', lampadaOn)

function lampadaOff(){
    lampOff.style.display = 'inline-flex'
    intOff.style.display = 'inline-flex'
    lampOn.style.display = 'none'
    intOn.style.display = 'none'
    body.style.backgroundColor = "black"
    }
intOn.addEventListener ('click', lampadaOff)