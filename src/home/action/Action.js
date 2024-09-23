import './action.scss'
import Button from '../../app/Button';


import { Link } from 'react-router-dom';


function Action() {
    return (
      
    <div className='action' >
        
        <div className="action_bg_2">
            <div className="container">
                <div className="action_info">
                    <span className="text_green">100% Natural Food</span>
                    <h1>Choose the best healthier way of life</h1>
                    <Link to = "/shop">
                        <Button title = {'Explore Now'}/>
                    </Link>
                </div>
            </div>

        </div>
        
    </div>
            

  
   
    );
  }
  
  export default Action;
  