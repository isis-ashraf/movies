import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fetch from './components/Fetch';
import Details from './components/Details';

function App(){
    return(
      
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Fetch/>}></Route>
        <Route path='/Details' element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App;