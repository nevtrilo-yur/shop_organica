import React from 'react'
import {useEffect, useState} from "react";

import './home.scss'


import AboutSmall from "./aboutSmall/AboutSmall";
import Action from "./action/Action";
import Banner from "./banner/Banner";
import Product from "./ourProd/Product";
import Offer from './offer/Offer'
import EcoFr from './ecoFriendly/EcoFr'
import CartFixed from '../cartFixed/CartFixed';



function Home() {

    const [data_prod, setData_prod] = useState([]) 

   useEffect(() => {
        
      fetch('https://nevtrilo-yur.github.io/shop_api/shop.json')
      .then(data => data.json())
      .then(data => {

         // data = data.map( i => [Math.random(),i]).sort().map(i => i[1])
         // console.log(data)
         setData_prod(data)
      })
      
   }, []);



    return (
      
    <div className='home' >
      
        <Action/>
        <Banner/>
        <AboutSmall/>
        <Product data_prod = {data_prod}/>
        <Offer data_prod = {data_prod}/>
        <EcoFr />
      <CartFixed/>

      
    </div>
            

  
   
    );
  }
  
  export default Home;
  