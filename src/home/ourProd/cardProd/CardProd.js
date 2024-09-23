import './cardprod.scss'

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import{
    increment,
    decrement,
    selectCounterGoods
} from '../../../slices/slice'


function CardProd({id,  name, category, img, quantity, price}) {


    const counterGoods = useSelector(selectCounterGoods)

    let link = `/card/${id}`

    const dispatch = useDispatch()

    const addGoods = (e) => {
        e.preventDefault()
        
        // dispatch(increment(e.target.name))
        dispatch(increment([e.target.name, e.target.value, e.target.id]))
        
    }
    const removeGoods = (e) => {
        
        e.preventDefault()
        
        // console.log(counterGoods[name][0])
        // dispatch(increment(e.target.name))
        dispatch(decrement([e.target.name, e.target.value,e.target.id]))
        
    }


    
    

    return (
      
        <div className="item">
        <div className="item_container">
            <div className="category">
                {category}
            </div>
            <Link to = {link}>
             <img className='item_img' src = {img} alt="item" />
            </Link>
            <div className="item_name">{name}
                <p>{quantity}</p>
            </div>
            <div className="hr"></div>
            <div className="price_add">
                <div className="price">{price} Руб</div>
                <div className="button_add_minus">
                    
                    {counterGoods[name] === undefined || counterGoods[name][0] === 0 ? null :  <button name = {name}  value = {price} id = {img}   className="add_rem_button" onClick={removeGoods}>-</button> }
                    {counterGoods[name] === undefined || counterGoods[name][0] === 0 ? null : <h6>{counterGoods[name][0]}</h6>}
                    <button name = {name}  value = {[price,quantity, link]} id = {img}   className="add_rem_button" onClick={addGoods}>+</button>
                
                </div>
            </div>
        </div>
    </div>

  
   
    );
  }
  
  export default CardProd;
  