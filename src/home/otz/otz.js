import './otz.scss'
import avatar from'./img/avatar_img.png'
import range from'./img/Star.svg'


import Carousel from '../../carousel/Carousel';


function Otz() {
    return (
      <div className='otz' >
            
            <div className="text_green">Testimonial</div>
            <h2>What Our Customer Saying?</h2>
        <Carousel>

        <div className="otz_container">
            
            <img src={avatar} alt="avatar" className="otz_avatar" />
            <img src={range} alt="range" className="otz_range" />
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            <h6>Sara Taylor</h6>
            <p className='name_work'>Consumer</p>

        </div>
        <div className="otz_container">
            
            <img src={avatar} alt="avatar" className="otz_avatar" />
            <img src={range} alt="range" className="otz_range" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, delectus.</p>
            <h6>Tom Lloyd</h6>
            <p className='name_work'>Teacher</p>

        </div>
        <div className="otz_container">
            
            
            <img src={avatar} alt="avatar" className="otz_avatar" />
            <img src={range} alt="range" className="otz_range" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt earum expedita. Officia, eos quasi pariatur dicta asperiores sit rem!</p>
            <h6>John Colan</h6>
            <p className='name_work'>Lead</p>

        </div>

        </Carousel>
            <div className="container advant">
                <div className="advant-item">
                    <h3>100%</h3>
                    <p>Organic</p>
                </div>
                <div className="advant-item">
                    <h3>285</h3>
                    <p>Activ Product</p>
                </div>
                <div className="advant-item">
                    <h3>350+</h3>
                    <p>Organic Orchards</p>
                </div>
                <div className="advant-item">
                    <h3>25+</h3>
                    <p>Years of F       arming</p>
                </div>
            </div>


       
    </div>
    
            

  
   
    );
  }
  
  export default Otz;
  