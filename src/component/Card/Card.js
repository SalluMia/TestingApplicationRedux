import React, { useEffect, useState } from 'react';
import { fetchData } from '../store/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './style.css'

function Card() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <div className="container">
      <div className="row">
        {data && data.map((item) => {
          const { title, Description, image, _id } = item;

          return (
            <div key={_id} className='col-sm-3'>
              <div className="card mt-2">
                <div className="card-header p-0">
                  <img src={`http://localhost:9000/${image}`} alt="Card image cap" className='w-100' style={{height:'200px', objectFit:'cover'}}/>
                </div>
                <div className="card-body">
                  <h5>{title}</h5>
                  <p>{Description.slice(0, 200)}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/details/${item._id}`} className='btn btn-dark btn-md' style={{borderRadius:'0',
                       fontSize: '13px',
                       fontWeight: 'bold'
                }}>Read More</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
