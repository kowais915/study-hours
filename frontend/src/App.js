

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

// importing components
import Nav  from './components/Nav'
import Main from './components/Main'
import Create from './pages/Create'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <div className="App">
      <BrowserRouter>

          <Routes>

            <Route
              path='/create'
              element = {<Create/>}
            
            
            
            />


            <Route
              path='/'
              element = {<Home/>}

            />


            <Route
              path='/about'
              element ={<About/>}


            />


          </Routes>
   



          
      </BrowserRouter>



    </div>
  );
}

export default App;
