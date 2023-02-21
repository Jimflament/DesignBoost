// API Connection
fetch('https://quotes.fdnd.nl/api/v1/quotes')
  .then(response => response.json())
  .then((data) => {

// Generate HTML
  const genCardContainer = document.createElement('article');
  const genCardHeading = document.createElement('h1');
  const genCardText = document.createElement('p');

// Give HTML id's
  genCardContainer.setAttribute('id', 'card-container');
  genCardHeading.setAttribute('id', 'card-heading')
  genCardText.setAttribute('id', 'card-text')
  
// Adding Children to parents
  genCardContainer.appendChild(genCardHeading);
  genCardContainer.appendChild(genCardText);
  
// Adding the card container to the body
  document.body.appendChild(genCardContainer);

// Choosing a random quote
  let arrayNum = Math.floor(Math.random() * 16);
  let randomQuote = data.quotes[arrayNum];
  
// turning the id's into variables
  const cardHeading = document.getElementById('card-heading');
  const cardText = document.getElementById('card-text');


// Inserting HTML content
  cardHeading.innerHTML = randomQuote.author;
  cardText.innerHTML = randomQuote.text;
})