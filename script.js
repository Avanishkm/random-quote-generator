
const Quotes = document.getElementById("quote");
const Auther = document.getElementById("author");
const newQuateBtn = document.querySelector("button");
const API_URL = "https://api.quotable.io/random";
const getQuate = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    Quotes.innerHTML = data.content;
    Auther.innerHTML = data.author;

    window.localStorage.setItem('data',JSON.stringify(data));
    data = JSON.parse(window.localStorage.getItem('data')) || [];
}

getQuate(API_URL);

const tweetQuotes = () => {
    window.open(`https://twitter.com/intent/tweet?text=${Quotes.innerHTML} ---by ${Auther.innerHTML}`,
    "Tweet Window", "width=800, height=500");
}


