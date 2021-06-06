// let quoteResponse = [];
// // Get Quote from the api

// function getRandomQuote() {
//     const quote = quoteResponse[Math.floor(Math.random() * quoteResponse.length)];
//     console.log(quote);
// }

// // Async fetch request : by using async await we are not implementing try catch if we don't have any data that will avoid throwing error if we don't get any response
// async function getQuote() {
//     const url = 'https://type.fit/api/quotes';
//     const response = await fetch(url);
//     quoteResponse = await response.json();
//     // this will return the array of the object
//     getRandomQuote()
//     // console.log(quoteResponse[17]);
// }

// // onload
// getQuote();

// instead of getting this from the api we can store api data into variable and get random quotes from there as well.

function getQuote2() {
    const quote =  localQuote[Math.floor(Math.random() * localQuote.length)];
    console.log(quote);
}
getQuote2();