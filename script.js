// API Connection
loading('on');
fetch('https://opensheet.elk.sh/1NNaZeJXR-AaBeRoIrphPCTeAx1ltZ4ltH0yGV9_WIQ0/quotes')
  .then(response => response.json())
  .then((data) => {
    loading('off');
    renderQuotes(data);
    document.getElementById('quote_reset').onclick = function(){renderQuotes(data)};
  })
  
  function renderQuotes(quoteData){
    // Choosing a random quote
    let arrayNum = Math.floor(Math.random() * 10);
    let randomQuote = quoteData[arrayNum];
    
    // turning the id's into variables
    const cardHeading = document.getElementById('card-heading');
    const cardText = document.getElementById('card-text');
    
    // Inserting HTML content
    cardHeading.innerHTML = randomQuote.author;
    cardText.innerHTML = randomQuote.text;
  }
  
  function loading(state){
    
    if(state === 'on'){
      document.getElementById('card-container').style.display = 'none';
    }else{
      document.getElementById('card-container').style.display = 'flex';
      document.getElementById('loading-screen').style.display = 'none';
    }
    
  }