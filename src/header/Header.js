import logo from './img/Logo.svg'
import './header.scss'
import cart from './img/cart.png'

import { useSelector } from 'react-redux'
import { selectSummary} from '../slices/slice'

import React from 'react';
import {Link} from 'react-router-dom';


function Header() {

  // const counterGoods = useSelector(selectCounterGoods)
  // const counter = useSelector(selectCountCart)
  const summ = useSelector(selectSummary)



  return (
    <div className='header' >
      
      
      <div className="logo_nav">


        <Link  to = '/' className="logo">
          
          <img src={logo} alt="logo" />
          <p className="logo_name">Organick</p>
        </Link>

        <nav>
          <Link  className='header_link'  to = '/'>
            Home
          </Link>
          
          
          <Link className='header_link' to = '/shop'
            >
              Shop
          </Link>
        
        </nav>
 
      </div>

      
      <div className="search_cart">
        {/* <div className="search">
          
          <input type="text" className="search_input" />
          <img src={search} alt="search" />
        </div> */}
        <Link to = '/cart'  className="cart">
          <img src={cart} alt="cart" />
          <h6>{`Корзина (${summ})`}</h6>
        </Link>
      </div>
    </div>
  );
}

export default Header;
