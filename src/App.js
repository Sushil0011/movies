import './App.scss';
import React from 'react';
import { useEffect } from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './Components/Header';
import Movies from './Components/Movies';
import Recent from './Components/Recent';
import Mylist from './Components/Mylist';
import Tvshow from './Components/Tvshow';
import Footer from './Footer';
import axios from 'axios';
function App() {
// const datafetching= async()=>{
//   const data= await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=c302eb909a97c0e74c6cc6f80326cac3");
//   console.log(data)
//   const result=await data.results;
//   console.log(result);

// }

// useEffect(() => {

// datafetching();
  
// })


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
