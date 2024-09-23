import React from 'react';

import './Offer.scss'
import CardProd from '../ourProd/cardProd/CardProd';

import Button from '../../app/Button'

import { Link } from 'react-router-dom';




function Offer(props) {



    return (
      <div className='offer' >

        <div className="container">
            <div className="offer_info">
                <div className="offer_info-name">
                    <div className="text_green">Offer

                    </div>
                    <h2>We Offer Organic For You</h2>
                </div>
                <Link to = '/shop'>
                    <Button title = {'Viev All'} />
                </Link>
            </div>
            <div className="items_line">
                 {
                
                  
                  props.data_prod.map(i => [Math.random(),i]).sort().map(i => i[1]).map( (elem, index) =>{

                      if(index < 4){
  
                          return <CardProd key = {elem.id} quantity = {elem.quantity} id = {elem.id} name = {elem.name} category = {elem.category}  img = {elem.image} price = {elem.price}/>
                      }
  
                      else{
                          return true
                      }
                  }) 
                    }
            

            </div>


        </div>
        

       
    </div>
    
            

  
   
    );
  }
  
  export default Offer;
  