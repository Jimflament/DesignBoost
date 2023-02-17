const url = 'https://quote.api.fdnd.nl/v1/quote'

const data = fetch(url)

    .then(response => response.json())
    .then(data => console.log(data))