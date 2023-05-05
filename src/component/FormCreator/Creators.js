import axios from 'axios';
import React, { useState } from 'react'
import { createPost } from '../store/productSlice';
import { useDispatch } from 'react-redux';

import style from './style.css'

function Creators() {
      const dispatch=useDispatch()
    const[myimage,setmyimage]=useState();
    const [mytitle,setmytitle]=useState();
    const [myDescription,setmyDescription]=useState();

    let handleimage=(e)=>{
          setmyimage(e.target.files[0])
    }

    let handleCreatorsSub = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', mytitle);
        formData.append('Description', myDescription);
        formData.append('image', myimage);
        dispatch(createPost(formData));
      };
    

    
  return (
    <div>
           <div className="container">
                <div className="form-details mt-0">
                <h5 className='text-center'>Create Posts</h5>
                       <form encType="multipart/form-data" onSubmit={handleCreatorsSub}>
                             <div className="row">
                                   <label htmlFor="">Post's Title:</label>
                                   <div className="col-sm-12">
                                        <input type="text" className='form-control' name='title' value={mytitle} onChange={(e)=> setmytitle(e.target.value)} />
                                   </div>
                             </div> 

                             <div className="row mt-2">
                                   <label htmlFor="" >Description:</label>
                                   <div className="col-sm-12">
                                       <textarea name="Description" id="" cols="30" rows="5" className='form-control'  value={myDescription} onChange={(e)=>setmyDescription(e.target.value)} ></textarea>
                                   </div>
                             </div> 


                             <div className="row mt-2">
                                   <div className="col-sm-12">
                                        <input type="file" className='form-control' name='image' onChange={handleimage} />
                                   </div>
                             </div> 

                             <div className="row mt-3">
                               <div className="">
                                   <button type='submit' className='btn btn-md btn-dark col-sm-12'>CREATE</button>
                               </div>    
                            </div>   

                       </form>
                </div>
           </div>
    </div>
  )
}

export default Creators
