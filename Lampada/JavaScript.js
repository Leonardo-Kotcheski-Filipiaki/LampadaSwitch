var intOff = document.createElement("img")
intOff.src = "./Imagens/Interruptor off.png"
intOff.setAttribute("id", "intOff")
var lampOff = document.createElement("img")
lampOff.src = "./Imagens/LampOFF.png"
lampOff.setAttribute("id", "lampOff")
var intOn = document.createElement("img")
intOn.src = "./Imagens/Interruptor on.png"
intOn.setAttribute("id", "IntOn")
var lampOn = document.getElementById("LampOn")
lampOn.src = "./Imagens/LampOn.png"
lampOn.setAttribute("id", "LampOn")
var body = document.getElementById("body")
body.append(intOff, lampOff, intOn, lampOn)

function lampadaOn (){
    lampOff.style.display = 'none'
    intOff.style.display = 'none'
    lampOn.style.display = 'inline-flex'
    intOn.style.display = 'inline-flex'
    body.style.backgroundColor = "white"
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