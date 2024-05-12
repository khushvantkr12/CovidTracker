import React, { useEffect, useState } from 'react'
import './Covid.css';

export default function Covid() {
   const [datas,setDatas]=useState([]);

   const getCovidData = async () => {
    try{
    const res=await fetch('https://data.covid19india.org/data.json');//await mtlb promise retur karega
    const dataupdated=await res.json();
    setDatas(dataupdated.statewise[0]);
 

    }catch(err){
      console.log(err)
    }
   }
  useEffect(() => {
    getCovidData();
  })
  return (
    <>
    <div className='mainbody'>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 TRACKER</h2>

      <ul>
      <li className='card'>
      <div className='card_main'>
      <div className='card_inner'>
      <p className='card_name'><span>OUR </span>COUNTRY</p>
      <p className='card_total card_small'>INDIA</p>
      </div>
      </div>
      </li>

      <li className='card'>
      <div className='card_main2'>
      <div className='card_inner'>
      <p className='card_name'><span>TOTAL </span>RECOVERED</p>
      <p className='card_total card_small'>{datas.deltarecovered}</p>
      </div>
      </div>
      </li>

      <li className='card'>
      <div className='card_main3'>
      <div className='card_inner'>
      <p className='card_name'><span>TOTAL </span>CONFIRMED</p>
      <p className='card_total card_small'>{datas.confirmed}</p>
      </div>
      </div>
      </li>

      <li className='card'>
      <div className='card_main4'>
      <div className='card_inner'>
      <p className='card_name'><span>TOTAL </span>DEATH</p>
      <p className='card_total card_small'>{datas.deaths}</p>
      </div>
      </div>
      </li>

      <li className='card'>
      <div className='card_main5'>
      <div className='card_inner'>
      <p className='card_name'><span>TOTAL </span>ACTIVE</p>
      <p className='card_total card_small'>{datas.active}</p>
      </div>
      </div>
      </li>

      <li className='card'>
      <div className='card_main6'>
      <div className='card_inner'>
      <p className='card_name'><span>TOTAL </span>UPDATED</p>
      <p className='card_total card_small'>{datas.lastupdatedtime}</p>
      </div>
      </div>
      </li>


      </ul>
      </div>
    </>
  )
}
