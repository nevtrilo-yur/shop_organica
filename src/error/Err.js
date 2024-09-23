
import './error.scss'

import { Link } from 'react-router-dom';

import Button from '../app/Button'


function Err() {
    return (
      
    <div className='err' >
        <h2>404</h2>
        <h3>Page not found</h3>
        <Link to = '/'>
        <Button title = {'На главную'}></Button>
        </Link>
    </div>
            

  
   
    );
  }
  
  export default Err;
  