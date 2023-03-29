import './App.scss';
import React from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './Components/Header';
import Movies from './Components/Movies';
import Recent from './Components/Recent';
import Mylist from './Components/Mylist';
import Tvshow from './Components/Tvshow';
import Footer from './Footer';
function App() {


  return (
  <>

    
   <Router>
<Header/>
    <Routes>
    <Route path='/'element={<Home/>}/>
       <Route path='/tvshows'  element={<Tvshow/>}/> 
     <Route path='/movies'   element={<Movies/>}/> 
       <Route path='/recently'  element={<Recent/>}/> 
       <Route path='/mylist'   element={<Mylist/>}/> 


     </Routes>

     <Footer/>
     </Router>





     {/* <div>

      {

// console.log(data)
// data.map((elem,index) => <h1   key={index}> {elem.original_title}</h1>
  


// )

      }
     </div> */}

     </>
    
  );
}

export default App;
