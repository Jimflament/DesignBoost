const app = document.querySelector('.app');

function getQuotes(){
  const markup = `
    <section class="quotes">
      <article class="quote-container">
          <h1 class="quote-name"></h1>
          <p class="quote-text"></p>
      </article>
      <button class="quote-refresh">New quote</button>
    </section>
  `
  app.innerHTML = markup;
  // API Connection
loading('on');
fetch('https://opensheet.elk.sh/1NNaZeJXR-AaBeRoIrphPCTeAx1ltZ4ltH0yGV9_WIQ0/quotes')
  .then(response => response.json())
  .then((data) => {
    // loading('off');
    renderQuotes(data);
    document.querySelector('.quote-refresh').onclick = function() {renderQuotes(data)};
  })
  
  function renderQuotes(quoteData){
    // Choosing a random quote
    let arrayNum = Math.floor(Math.random() * 10);
    let randomQuote = quoteData[arrayNum];
    
    // turning the id's into variables
    const quoteHeading = document.querySelector('.quote-name');
    const quoteText = document.querySelector('.quote-text');
    
    // Inserting HTML content
    quoteHeading.innerHTML = randomQuote.author;
    quoteText.innerHTML = randomQuote.text;
  }

  function loading(state){
    if(state === 'on'){
      document.querySelector('.quote-container').style.display='none';
      document.querySelector('.quote-refresh').style.display='none';

      const createLoading = document.createElement('h1');
      createLoading.setAttribute('class', 'loading-text');
      createLoading.innerHTML = 'Loading';
      console.log(createLoading)
    }else{
      document.querySelector('.quote-container').style.display='flex';
      document.querySelector('.quote-refresh').style.display='block';
    }
  }
}

export default getQuotes;