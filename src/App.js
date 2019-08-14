import React from 'react';
import './App.css';
import Undermeny from './components/undermeny/Undermeny'
import Forstasida from './components/forstasida/Forstasida'
import Handelser from './components/Handelser/Handelser'
import Kalender from './components/kalender/Kalender'
import Verksamhet from './components/Verksamhet/Verksamhet'
import Kontakt from './components/Kontakt/Kontakt'



function App() {
  return (
    <div className="App">
      {
        //90vh
      }
      <div className="allt-over-undermeny">
      {
        /* 
        <Verksamhet />

        <Kontakt />
  
          <Handelser />
  
                <Forstasida />

        */
      }



      <Kalender />


      </div>
      {
        //10vh
      }

  <Undermeny />

    </div>
  );
}

export default App;