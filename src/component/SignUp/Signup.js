import React, { useState } from 'react'
import style from './style.css'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
function Signup() {
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    name: '',
    email: '',
    work: '',
    phone: '',
    password: '',
    cpassword: ''
  })

  let handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setinputs({
      ...inputs, [name]: value

    })
    console.log(inputs)

  }

  let handleSubmit=async(e)=>{
     try{
         e.preventDefault()
          await axios.post('http://localhost:5000/signup',{
             ...inputs
          })
          window.alert('User Registered Successfully')
          navigate('/signin')
     }
     catch(error){
       console.log(error)
     }
  }
  return (
    <div>
      <div className="container text-center">
        <form id='SignUpform-data' onSubmit={handleSubmit}>
          <h5 className='text-center'>Sign Up Please!</h5>
          <hr />
          <div className="row ">
            <label htmlFor="" className='col-sm-2 col-form-lable '>Name:</label>
            <div className="col-sm-8">
              <input type="text" className='form-control' name='name' value={inputs.name} onChange={handleInputs} />

            </div>
          </div>

          <br />

          <div className="row">
          <label htmlFor="" className='col-sm-2 col-form-lable'>Email:</label>
          <div className="col-sm-8">
          <input type="email" className='form-control' name='email' value={inputs.email} onChange={handleInputs} />
          </div>
          </div>
          <br />
       
          <div className="row">
          <label htmlFor="" className='col-sm-2 col-form-label'>Work:</label>
          <div className="col-sm-8">
          <input type="text" className='form-control' name='work' value={inputs.work} onChange={handleInputs} />
          </div>
          </div>
          <br />

          <div className="row">
          <label htmlFor="" className='col-sm-2 col-form-label'>Phone:</label>
          <div className="col-sm-8">
          <input type="phone" className='form-control' name='phone' value={inputs.phone} onChange={handleInputs} />
          </div>
          </div>
       
          <br />
           <div className="row">
           <label htmlFor="" className='col-sm-2 col-form-label'>Password:</label>
           <div className="col-sm-8">
          <input type="text" className='form-control' name='password' value={inputs.password} onChange={handleInputs} />
           </div>
           </div>
       
          <br />
           <div className="row">
           <label htmlFor="" className='col-sm-2 col-form-label'>Confirm Password:</label>
           <div className="col-sm-8">
          <input type="text" className='form-control' name='cpassword' value={inputs.cpassword} onChange={handleInputs} />
           </div>
           </div>
         
          <br />

          <Link to='/signin' style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '200px' }}>Already have an account? Log in</Link>

          <br />
          <br />

          <button className='btn btn-md btn-success' type='submit'>Sign up</button>

        </form>
      </div>
    </div>
  )
}

export default Signup
