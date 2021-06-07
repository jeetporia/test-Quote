const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const autherText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let quoteResponse = [];
// Get Quote from the api

function loading() {
    quoteContainer.hidden = true;
    loader.hidden = false;
}

function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function getRandomQuote() {
    loading()
    const quote = quoteResponse[Math.floor(Math.random() * quoteResponse.length)];
    console.log(quote);
    // we are getting some quote's author null - we want to show those author as unknown 
    if(!quote.author) {
        autherText.textContent = 'Unknwon';
    } else {
        autherText.textContent = quote.author;
    }
    // if quote is too long then we will apply small font size;
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    // close the loader 
    complete();
}

// Async fetch request : by using async await we are not implementing try catch if we don't have any data that will avoid throwing error if we don't get any response
async function getQuote() {
    loading();
    const url = 'https://type.fit/api/quotes';
    try {   
        const response = await fetch(url);
        quoteResponse = await response.json();
    } catch(error) {
        console.log(error)
    }
    // this will return the array of the object
    getRandomQuote()
    // console.log(quoteResponse[17]);
}

function tweetQuote(){
    // url got from the twitter site
    const tweeterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${autherText.textContent}`;
    // to open twitter in the new tab we can use 2 parameter 2nd parameter as _black
    window.open(tweeterUrl, '_blank')
}

// event listener;
// don't write () at the end of the function name
newQuoteBtn.addEventListener('click', getRandomQuote)
twitterBtn.addEventListener('click',tweetQuote);
// onload
getQuote();

// instead of getting this from the api we can store api data into variable and get random quotes from there as well.
// function getQuote2() {
//     const quote =  localQuote[Math.floor(Math.random() * localQuote.length)];
//     console.log(quote);
// }
// getQuote2();