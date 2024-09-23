import React from "react";
import { useEffect,useState } from "react";
import CartFixed from '../cartFixed/CartFixed';

import './shop.scss'
import CardProd from "../home/ourProd/cardProd/CardProd";


function Shop() {

    const [val,setVal] = useState([])

    useEffect(() => {
        
        fetch('https://nevtrilo-yur.github.io/shop_api/shop.json')
        .then(data => data.json())
        .then(data => {

           setVal(data)
           console.log(data)
        })
        
     }, []);


    return (
      
    <div className='shop' >

        <div className="shop_bg">
            <h2>Магазин</h2>
        </div>

        <div className="items container">

                {val.map(elem => {
                    
                    return <CardProd key = {elem.id} quantity = {elem.quantity} id = {elem.id} name = {elem.name} category = {elem.category}  img = {elem.image} price = {elem.price}/>
                            
                })}
        </div>
         
        <CartFixed/>
    </div>
            

  
   
    );
  }
  
  export default Shop;
  