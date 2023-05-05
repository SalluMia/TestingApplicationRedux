import React from 'react'
import Signup from '../SignUp/Signup'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import style from './style.css'
import Creators from '../FormCreator/Creators'
import Welcome from '../Welcome/Welcome'


function Home() {
  const isAuth = localStorage.getItem('jwt');

  return (
    <div>
          <div className="container-fluid">
            <div className="home-detail">
                     
                     {/* row start  */}
                            <div className="row">
                               <div className="col-sm-9">
                                    <div className="row" id='cards'>
                                       <Card/>
                                    </div>
                                     
                               </div>
                               <div className="col-sm-3">
                                { !isAuth?
                                  <Welcome/>
                                 :
                                 <Creators />
                                 

                                }
                                  
                               </div>


                            </div>
                     {/* row end  */}
            </div>
    </div>
    </div>
  )
}

export default Home
