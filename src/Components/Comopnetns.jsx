import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

const Comopnetns = () => {
    const [data,setData]=useState([])

    const getData=()=>{
      axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ").then((res)=>{
       
        console.log(res.data)
        setData(res.data)
      })
    }
    useEffect(()=>{
     getData()
    },[])
  return (
    <div className='componetnsbox'>
       {
        data.map((e)=>{
        return(
            <div>

            </div>
        )
        })
       }
    </div>
  );
}

export default Comopnetns;
