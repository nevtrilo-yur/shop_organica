import './cartFixed.scss'
import { useSelector } from 'react-redux'
import { selectSummary} from '../slices/slice'
import { Link } from 'react-router-dom';


function CartFixed() {

    const sum = useSelector(selectSummary)
  return (
   <>
    {sum ?
        (<Link to = '/cart'>
          <div className='cart_fixed' >
            <div className="count">
               <div> {sum} Р</div>
             </div>
          </div>
        </Link>) : null
    } 
   </>
    
  );
}

export default CartFixed;
