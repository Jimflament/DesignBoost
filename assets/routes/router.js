import getHome from '../controllers/getHome.js';
import getQuotes from '../controllers/getQuotes.js';

routie({
   '': function(){
    getHome();
   },
   quote: function(){
      getQuotes();
   }
})

export default routie;