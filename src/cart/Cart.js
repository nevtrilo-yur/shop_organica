import React from 'react';

import { Link } from 'react-router-dom';

import "./cart.scss"

import { useSelector, useDispatch } from 'react-redux'
import {selectCounterGoods,selectSummary} from '../slices/slice'


import{
  increment,
  decrement,
  removeAll
} from '../slices/slice'




function Cart() {

  const counterGoods = useSelector(selectCounterGoods)
  const sum = useSelector(selectSummary)
  const dispatch = useDispatch()


const add = (e) =>{
  e.preventDefault()
        
  // dispatch(increment(e.target.name))
  dispatch(increment([e.target.name, e.target.value, e.target.id]))
}

const rem = (e) =>{
  e.preventDefault()
        
  // dispatch(increment(e.target.name))
  dispatch(decrement([e.target.name, e.target.value, e.target.id]))
}

const remAll = () => {
  console.log("work")
  
  dispatch(removeAll())
}



  return (
    <div className='cart container' >

      {sum > 0 ? 

      <ul className='list_items'>

            {Object.keys(counterGoods).map( (elem,index)=> { 
             
              
              return counterGoods[elem][0] ? ( 
                
                <li className = "list_item" key = {index} >
                 
                
                
                <div className="img_name">
                  <Link to ={`${counterGoods[elem][5]}`}>
                <img src={counterGoods[elem][2]} alt={elem} />
                </Link>
                  <div className="elem_info">

                    <h6>{elem}</h6>
                   <p>{counterGoods[elem][4]}</p> 
                   <p><span>{counterGoods[elem][3]} рублей</span></p> 
                  </div>
                  </div>
                  <div className="add_remove">
                    <button name = {elem}  value = {[counterGoods[elem][1],counterGoods[elem][4]]} id = {counterGoods[elem][2]} className='button' onClick={rem}>-</button>
                    <p>{counterGoods[elem][0]} шт.</p>
                    <button  name = {elem}  value = {[counterGoods[elem][1],counterGoods[elem][4]]} id = {counterGoods[elem][2]} className='button'  onClick={add}>+</button>
                  </div>
              </li>
             )
              : null
            })}
         
            {sum >0 ? <button onClick={remAll} className="button button_rem-all">Удалить все</button> : null}
         
        </ul> : null
      
      }
        
            
        {sum > 0 ? 
          (
          <div className='sum_z'>
            <div className="sum">{`Итого: ${sum} рублей`}</div>
            <button className="button button_rem-all">Заказать доставку</button>
          </div>
          )
          : <p className='empty_cart'>В корзине пока ничего нет</p>}
        
    </div>
  );
}

export default Cart;
