import { Link } from "react-router-dom";

import './footer.scss'

import logo from '../header/img/Logo.svg'
import soc_1 from './img/1.svg'
import soc_2 from './img/2.svg'
import soc_3 from './img/3.svg'
import soc_4 from './img/4.svg'


function Footer() {
    return (
      
    <div className='footer' >
        <div className="footer_main-info">


        <div className="social">
            <Link to = '/' className="footer-logo">
                <img src={logo} alt="footer-logo" />
                <h5 className="footer_logo_name">Organick</h5>
            </Link>
          
            <div className="footer_social">
                <img src={soc_1} alt="social" />
                <img src={soc_2} alt="social" />
                <img src={soc_3} alt="social" />
                <img src={soc_4} alt="social" />
            </div>
            </div>


            <div className="vert"></div>


            <div className="contact">
                <h5>Contact Us</h5>
                <div className="email">
                    <h6>Email</h6>
                    <p>needhelp@Organia.com</p>
                </div>
                <div className="phone">
                    <h6>Phone</h6>
                    <p>666 888 888</p>
                </div>
                <div className="adress">
                    <h6>Adress</h6>
                    <p>88 road, borklyn street, USA</p>
                </div>
            </div>



        </div>


        <div className="footer_copy">
          <p>Copyright © Organick</p>
        </div>
    </div>
            

  
   
    );
  }
  
  export default Footer;
  