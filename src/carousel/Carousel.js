import './carousel.scss'

import { useState, useEffect, Children, cloneElement } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';




function Carousel({children}) {

    const  [pages, setPages] = useState([])
    const  [offset, setOffset] = useState(0)
    const  [page_width, setPage_width] = useState(1108)


    

    useEffect(()=>{


       setPages(

            Children.map(children, (child) =>{

                if(window.innerWidth >= 1280){
                    setPage_width(1108)
                   } 
                if(window.innerWidth < 1280){
                    setPage_width(700)
                   } 
                   else if(window.innerWidth < 769){
                    setPage_width(400)
                   } 
                   
                return cloneElement(child, {
                    style:{
                        minWidth: `${page_width}px`,
                        maxWidth: `${page_width}px`,
                    }
                   
                })
            })
       )

  
    
    },[children, page_width])

    const handleLeft = () => {
        if(window.innerWidth >= 1280){
            setPage_width(1108)
           } 
        else if(window.innerWidth < 1280){
            setPage_width(700)
           } 
        else if(window.innerWidth < 769){
            setPage_width(400)
           } 
           
        setOffset((currentOffset)=>{
            const newOffset = currentOffset + page_width
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRight = () => {
        if(window.innerWidth >= 1280){
            setPage_width(1108)
           } 
        else if(window.innerWidth < 1280){
            setPage_width(700)
           } 
           else if(window.innerWidth < 769){
            setPage_width(400)
           } 
        setOffset((currentOffset)=>{
            const newOffset = currentOffset - page_width
            console.log(newOffset)
            const maxOffset = -(page_width * (pages.length -1))
            return Math.max(newOffset, maxOffset)
        })
    }

 


    return (
        <div className="container main_container">

            
            <FaChevronLeft className='arrow' onClick={handleLeft}/>
                <div className="window">
                    <div className="all_items-container"
                        style={{transform: `translate(${offset}px`}}
                    > {pages}</div>
                </div>
            <FaChevronRight className='arrow' onClick={handleRight}/>
        </div>

    );
  }
  
  export default Carousel;
  