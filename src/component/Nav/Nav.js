import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './style.css'

function Nav() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('jwt');

  const handleLogout=()=>{
       localStorage.removeItem('jwt');
       navigate('/home')
  }

  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
   <b><Link className="navbar-brand" to="/home">Post Managers</Link></b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
       
       
      </ul>
      <form className="d-flex" role="search" id='linke'>
       
          { !isAuth ?
            <Link className="btn btn-success" to="/Signin">Signin</Link>
            :
            <Link className='btn btn-danger' to="/home" onClick={handleLogout}>LogOut</Link>

          }
    
        

      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
