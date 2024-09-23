import './aboutSmall.scss'

import React from 'react'

import icon_1 from './img/icon_1.svg'
import icon_2 from './img/icon_2.svg'

import { Link } from 'react-router-dom';

import Button from '../../app/Button'

function AboutSmall() {
    return (
    <div className="about_small">
        <div className='container' >
            <div className="info">
                <div className="ab">
                    <div className="text_green">About Us</div>
                    <h2>We Believe in Working
                        <br/>
                        Accredited Farmers
                    </h2>
                    <p className='p_op'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="inf">
                        <img src={icon_1} alt="icon" />
                        <div className="info_title">
                            <h6>Organic Foods Only</h6>
                            <p >Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                        
                    </div>
                    <div className="inf">
                        <img src={icon_2} alt="icon" />
                        <div className="info_title">
                            <h6>Organic Foods Only</h6>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                        
                    </div>
                    <Link to = '/shop'>
                        <Button title={'Shop Now'}/>
                    </Link>
                </div> 
            </div>
        </div>
    </div>  
            

  
   
    );
  }
  
  export default AboutSmall;
  