let adviceNr = document.getElementById("nr")
let quoteText = document.getElementById("quote")
let dice = document.getElementById("dice")

window.onload = function(){
    getQuote()
}


dice.addEventListener("click", () => {
    getQuote()
})

const getQuote = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    adviceNr.innerHTML = "Advice #" + data["slip"].id
    quoteText.innerHTML = '"'+ data["slip"].advice + '"'
}