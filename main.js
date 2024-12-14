let card2 = document.querySelector('.card2');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let button = document.querySelector('button');

const quote = async () => {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();

    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];


    h1.innerText = randomQuote.quote;
    p.innerText = randomQuote.author;
};

button.addEventListener('click', quote);

