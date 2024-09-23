import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



import { useDispatch, useSelector } from 'react-redux';

import CartFixed from "../cartFixed/CartFixed"

import{
    increment,
    decrement,
    selectCounterGoods
} from '../slices/slice'


import './itemCard.scss'



function ItemCard() {

  const counterGoods = useSelector(selectCounterGoods);

  const dispatch = useDispatch()

  const [items,setItems] = useState([])

  const [showDesc, setShowDesc] = useState(true)
  const [showDescDop, setShowDescDop] = useState(false)

  useEffect(()=>{
    
    
    fetch('https://nevtrilo-yur.github.io/shop_api/shop.json')
    .then(data => data.json())
    .then(data => {

       setItems(data)

    })


  },[])

  let {item_id} = useParams()

console.log(item_id)
console.log(items)
  const openDesc = () => {
    setShowDesc(true)
    setShowDescDop(false)
  }
  const openDescDop = () => {
    setShowDesc(false)
    setShowDescDop(true)
  }

  const addGoods = (e) => {
    e.preventDefault()
    
    dispatch(increment([e.target.name, e.target.value,e.target.id]))
    
  }
  
  const removeGoods = (e) => {
    
 
    e.preventDefault()
    
    dispatch(decrement([e.target.name, e.target.value, e.target.id]))
    
  }



 
  return (

    
    <div className='itemCard' >
      

  
      {items.filter(elem => elem.id === +item_id).map(elem => {
                    

          return (
            <div key = {elem.id}>
            <div className="img-bg">
            <h2>{elem.name}</h2>
            </div> 
          
          <div className="container"> 
            
            <div >
          <div className="item_card">
            <div className="item_img" style={{ "backgroundImage": `url(${elem.image})`}}>
              <div className="quantity">
                {elem.category}
              </div>
            </div>
            <div className="item_card-info">
              <h4>{elem.name}</h4>
              <h6>P {elem.price} <span>за {`${elem.quantity}`}</span></h6>
              
              <p>{elem.descriptionSmall}</p>
              <div className="button_cont">
                
                <button className="button" value = {elem.price} name = {elem.name} onClick={removeGoods}>-</button>
                {counterGoods[elem.name] === undefined || counterGoods[elem.name][0] === 0 ? <p>0</p> : <p>{counterGoods[elem.name][0]}</p>}
                
                <button className="button" value = {[elem.price,elem.quantity,`/card/${elem.id}`]} id={elem.image} name = {elem.name} onClick={addGoods}>+</button>
              </div>
            
            </div>
          </div> 


          <div className="item_tab-desc">
            {showDesc ?  <div className="button" style={{'backgroundColor': "#EFD372" , 'color': "#274C5B"}} onClick = {openDesc}>Описание</div> : <div className="button" onClick = {openDesc}>Описание</div>}
            
             {showDescDop ? <div className="button" style={{'backgroundColor': "#EFD372", 'color': "#274C5B"}} onClick = {openDescDop}>Дополнительная информация</div> : <div className="button" onClick = {openDescDop}>Дополнительная информация</div>}
          </div>

          <div className="item_tab-info">
            
            {showDesc && 
             <p>
             Lorem ipsum orem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit aorem ipsum dolor sit adolor sit amet consectetur adipisicing elit. Nostrum incidunt cumque, obcaecati aliquam perferendis ab numquam ut laudantium officiis. Unde.
             </p>}
           

            {showDescDop &&  <p>
            {elem.dop} 
            </p>}
           
          </div>

          </div>
          </div> 
          </div>
          )
        })} 

      <CartFixed/>
    </div>
  );
}

export default ItemCard;
