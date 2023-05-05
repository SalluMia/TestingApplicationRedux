import React, { useState } from 'react'
import style from './style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Cookies from 'js-cookie';
function Signin() {
  const navigate=useNavigate()
  const [signin, setsignin] = useState({
    email:"",
    password:""
  })
  let handleSign = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    const signin1={
      ...signin,
      [name]: value
    }
    setsignin({

    ...signin1
    })
    console.log(signin1)
  }
  let handleSignin=async (e)=>{
       try{
           e.preventDefault()
          
        const res=  await axios.post('http://localhost:5000/signin',{
              ...signin,
           })

          const data= res;
          console.log(data)
           if(!data){
            window.alert('Wrong Credentials')
           }
           else{
            window.alert('Login Successfully')
            localStorage.setItem('jwt' , JSON.stringify(res));
            navigate('/home')
             
           }
       }
       catch(error){
        console.log(error)
       }
  }
  return (
    <div>
      <div className="container ">
        <form id='SignInform-data' onSubmit={handleSignin}>
          <h5>Sign In</h5>
          <hr />

          <div className="row">
            <label htmlFor="" class="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input type="email" className='form-control' name='email' value={signin.email} onChange={handleSign} />

            </div>
          </div>

          <br />

          <div className="row">
            <label htmlFor="" class="col-sm-2 col-form-label">Password:</label>
            <div class="col-sm-10">
              <input type="text" name='password' className='form-control' value={signin.password} onChange={handleSign} />
            </div>
          </div>


          <br />


          <br />

          <Link to='/signup' className='text-right' style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '240px' }}>Create an account: Signup</Link>

          <br />
          <br />

          <button className='btn btn-md btn-success' type='submit' >Sign in</button>

        </form>
      </div>
    </div>
  )
}

export default Signin
