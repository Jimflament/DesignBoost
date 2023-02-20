fetch('https://quote.api.fdnd.nl/v1/quote')
  .then(response => response.json())
  .then(data => {
 
  const genCardContainer = document.createElement('article');
  genCardContainer.setAttribute('id', 'card-container');

  const genCardHeading = document.createElement('h1');
  genCardHeading.setAttribute('id', 'card-heading')
  genCardContainer.appendChild(genCardHeading);

  const genCardText = document.createElement('p');
  genCardText.setAttribute('id', 'card-text')
  genCardContainer.appendChild(genCardText);

  document.body.appendChild(genCardContainer);

  const arrayNum = Math.floor(Math.random() * 15);
  const cardContainer = document.getElementById('card-container');
  const cardHeading = document.getElementById('card-heading');
  const cardText = document.getElementById('card-text');

  cardHeading.innerHTML = data.data[arrayNum].name;
  cardText.innerHTML = data.data[arrayNum].text || data.data[arrayNum].bio;
})