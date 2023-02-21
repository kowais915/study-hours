import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

// importing components
import Nav  from './components/Nav'

function App() {

  return (
    <div className="App">

    {/* navbar  */}
      <div className="navbar">
        <Nav />
      </div>
      
      <div className = "title">
        <h1>Study Hours</h1>
      </div>




    </div>
  );
}

export default App;
