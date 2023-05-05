import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Details() {
  const [data, setMyData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:9000/data/${id}`)
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container mt-4 p-5 bg-light">
        <div className="row">
            <div className="col-sm-5">
                 <img src={`http://localhost:9000/${data.image}`} alt="Post image" className='w-100' style={{height:'400px', objectFit:'cover',
                borderRadius:'5px' }}/>

            </div>
            <div className="col-sm-7">
            <h1>{data.title}</h1>
          <p>{data.Description}</p>
            </div>
        </div>
    </div>
  );
}

export default Details;
