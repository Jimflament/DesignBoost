import getHome from '../controllers/getHome.js';

routie({
   '': function(){
    getHome();
   }
})

export default routie;