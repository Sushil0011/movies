import React from 'react'
import logo from '../assests/logo.png';
import {Link} from 'react-router-dom'
import './header.scss';
const Header = () => {



  return (

<nav className='header'>

<Link to ="/"><img src={logo}  className="logo"  alt=""/></Link>


<div>
    <Link to="/tvshows">TV Shows</Link>
    <Link to="/movies">Movies</Link>

    <Link to="/recently">Recently Added</Link>

    <Link to="/mylist">My List</Link>

</div>
</nav>

  )
}

export default Header