import React, {useState} from 'react';
import "./styles/ScrollButton.css";

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      }  
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div className='scrollbutton' onClick={scrollToTop} 
       style={{display: visible ? 'inline' : 'none'}}>
         <i class="fa-solid fa-arrow-up-long"></i>
      </div>
    );
}


export default ScrollButton;