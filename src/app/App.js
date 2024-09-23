import './scss/App.scss';

import Header from '../header/Header';
import Home from '../home/Home';

import Shop from '../shop/Shop';

import Cart from '../cart/Cart';
import Err from '../error/Err';
import Footer from '../footer/Footer';
import ItemCard from '../item_goods/ItemCard'

import ScrollToTop from './ScrollToTop';




import { HashRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   
    <div className='App' >
      
        <Router>
          <ScrollToTop />
          <Header/>
          <Routes>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/card/:item_id' element={<ItemCard/>}/>
            <Route exact path='/' element={<Home/>}/>
            
            <Route exact path='/shop' element={<Shop/>}/>
            <Route  exact path='/*' element={<Err/>}/>
          </Routes>

        <Footer/>
        
        </Router>
    </div>
    
  );
}

export default App;
