import React, { useEffect, useState } from 'react'
import './home.scss'
import axios from 'axios'

const apikey = "c302eb909a97c0e74c6cc6f80326cac3";

const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original";
const nowplaying = "now_playing";
const popular = "popular";
const toprated = "top_rated";



const Home = () => {

  const [upcomingmovies, setUpcomingmovies] = useState([]);
  const [nowplayingmovies, setNowplaying] = useState([]);
  const [usepopular, setPopular] = useState([]);
  const [toprating, setToprating] = useState([]);


  useEffect(() => {
    const fetchupcoming = async () => {
      const res = await axios.get(`${url}/movie/upcoming?api_key=${apikey}`)
      const data=await res.data.results

      setUpcomingmovies(data);

    };
    const fetchnowplaying = async () => {
      const  res  = await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`)
      const data=await res.data.results

      setNowplaying(data);

    };
    const fetchpopular = async () => {
      const  res  = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      const data=await res.data.results

      setPopular(data);

    };
    const fetchtoprated = async () => {
      const  res  = await axios.get(`${url}/movie/${toprated}?api_key=${apikey}`)
      const data=await res.data.results

      setToprating(data);

    };
    fetchupcoming();
    fetchnowplaying();
    fetchpopular();
    fetchtoprated();

  },[]);




  return (

    <section className='home'>
      <div className='banner'>
<img src=  {`${ imgurl}/${popular[0].poster_path}`}   alt=""/>
      </div>
{/* {usepopular} */}
      <Row title={"Upcoming"} arr={upcomingmovies} />
      <Row title={"Now Playing "} arr={nowplayingmovies} />
      <Row title={"Popular"} arr={usepopular} />
      <Row title={"Top_Rating "} arr={toprating} />

    </section>


  )


}


const Card = ({ img }) => (


  <img className='card' src={img} alt="cover" />
)
const Row = ({ title,arr })=>{

  // console.log(title,arr)


  return (
    <div className='row'>

      <h2>{title}</h2>
      <div className='image-container'>


        {

        
          arr.map((item, index) => (
            <Card key={index} img={`${imgurl}/${item.poster_path}`} />
          ))
        }
      </div>

    </div>

  )
}






export default Home;