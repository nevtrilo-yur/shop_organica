import React from 'react'
import { useState, useEffect } from 'react'

import './product.scss'
import Button from '../../app/Button'
import CardProd from './cardProd/CardProd'




function Product(props) {

   let [countGoods, setCountGoods] = useState(4)
   const [dataGoods, setDataGoods] = useState([])
   const [showButtMore, setShowButtMore] = useState(true)

   const showMoreGoods = () => {
      countGoods += 4
      setCountGoods(countGoods)
      if (countGoods >= dataGoods.length-1){
         setShowButtMore(false)
      }
   }


   useEffect( () =>{

      // setDataGoods(props.data_prod.map(i => [Math.random(),i]).sort().map(i => i[1]))-----------------------------для того,чтобы карточки выводились в рандомном порядке
      setDataGoods(props.data_prod)

   },[props.data_prod])



    return (
      
    <div className='container' >
        <div className="product">
             <div className="text_green">Categories</div>
             <h2>Our Products</h2>
            
                <div className="items_line">

                  {
                  
                    dataGoods.map( (elem, index) =>{
   
                         if(index < countGoods){
     
                             return (
                              
                                 <CardProd key = {elem.id} id = {elem.id} el = {elem} quantity = {elem.quantity}  name = {elem.name} category = {elem.category}  img = {elem.image} price = {elem.price}/>
                              
                             )
                         }

                         else{
                             return true
                         }
                     }) 
                  }
                </div>


            
             { showButtMore && <Button onClick = {showMoreGoods}  title={'Load More'}/>}
             
             
        </div>

    </div>
            

  
   
    );
  }
  
  export default Product;
  