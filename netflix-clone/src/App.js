import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import Favlist from './component/Favlist/Favlist';
import  Navbar  from './component/Navbar/Navbar';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/favourite' element={<Favlist/>}/>
    </Routes>
    </div>
  );
}
export default App;