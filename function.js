const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
facebookBtn = document.querySelector(".facebook");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";

    fetch("https://api.quotable.io/random") .then(res => res.json()) .then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quotes"
    });

}

copyBtn.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});





quoteBtn.addEventListener("click" , randomQuote);