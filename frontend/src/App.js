

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

// importing components
import Nav  from './components/Nav'
import Main from './components/Main'

function App() {

  return (
    <div className="App">

    {/* navbar  */}
      <div className="navbar">
        <Nav />
      </div>

      <div className="main">
        <Main />
      </div>
      
      




    </div>
  );
}

export default App;
