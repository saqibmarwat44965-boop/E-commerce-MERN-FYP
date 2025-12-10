import "./styles/Slider.css";

import slide1 from "./../images/slider1-img.jpg";
import slide2 from "./../images/slider2-img.png";
import slide3 from "./../images/slider3-img.jpg";

function Slider(){
 
   /* var firstSlideImg = document.getElementById('.slideimg-1');
    var firstSlideTop = firstSlideImg.style.marginTop;

    function moveImg1()
    { 

        var top = firstSlideImg.style.top;
        var newtop;
        
        
        newtop = parseInt(top) + 2;        
        
        newtop += 'px';
        
        firstSlideImg.style.top = newtop;
        
        
        console.log(newtop);
    
    }
    
    function start()
    {
        var myanim1;
        if( firstSlideTop > 100){
            myanim1 = setInterval('moveImg1(5)', 10 )
        }
        
    }

    */

    const Slide1 = () => {

        var styleShowSlide1 = {
            "display" : "inline-block",
        };
        
        var objShowSlide1 = document.querySelector(".first-slide");
        Object.assign(objShowSlide1.style, styleShowSlide1);

        var styleShowSlide2 = {
            "display" : "none",
        };
        
        var objShowSlide2 = document.querySelector(".second-slide");
        Object.assign(objShowSlide2.style, styleShowSlide2);

        var styleShowSlide3 = {
            "display" : "none",
        };
        
        var objShowSlide3 = document.querySelector(".third-slide");
        Object.assign(objShowSlide3.style, styleShowSlide3);

        var styleCircle1 = {
            "color" : "grey",
        };
        
        var objCircle1 = document.querySelector(".first-circle");
        Object.assign(objCircle1.style, styleCircle1);

        var styleCircle2 = {
            "color" : "black",
        };
        
        var objCircle2 = document.querySelector(".second-circle");
        Object.assign(objCircle2.style, styleCircle2);

        var styleCircle3 = {
            "color" : "black",
        };
        
        var objCircle3 = document.querySelector(".third-circle");
        Object.assign(objCircle3.style, styleCircle3);

    };

    const Slide2 = () => {

        var styleShowSlide1 = {
            "display" : "none",
        };
        
        var objShowSlide1 = document.querySelector(".first-slide");
        Object.assign(objShowSlide1.style, styleShowSlide1);

        var styleShowSlide2 = {
            "display" : "inline-block",
        };
        
        var objShowSlide2 = document.querySelector(".second-slide");
        Object.assign(objShowSlide2.style, styleShowSlide2);

        var styleShowSlide3 = {
            "display" : "none",
        };
        
        var objShowSlide3 = document.querySelector(".third-slide");
        Object.assign(objShowSlide3.style, styleShowSlide3);

        var styleCircle1 = {
            "color" : "black",
        };
        
        var objCircle1 = document.querySelector(".first-circle");
        Object.assign(objCircle1.style, styleCircle1);

        var styleCircle2 = {
            "color" : "grey",
        };
        
        var objCircle2 = document.querySelector(".second-circle");
        Object.assign(objCircle2.style, styleCircle2);

        var styleCircle3 = {
            "color" : "black",
        };
        
        var objCircle3 = document.querySelector(".third-circle");
        Object.assign(objCircle3.style, styleCircle3);

    };

    const Slide3 = () => {

        var styleShowSlide1 = {
            "display" : "none-block",
        };
        
        var objShowSlide1 = document.querySelector(".first-slide");
        Object.assign(objShowSlide1.style, styleShowSlide1);

        var styleShowSlide2 = {
            "display" : "none",
        };
        
        var objShowSlide2 = document.querySelector(".second-slide");
        Object.assign(objShowSlide2.style, styleShowSlide2);

        var styleShowSlide3 = {
            "display" : "inline-block",
        };
        
        var objShowSlide3 = document.querySelector(".third-slide");
        Object.assign(objShowSlide3.style, styleShowSlide3);

        var styleCircle1 = {
            "color" : "black",
        };
        
        var objCircle1 = document.querySelector(".first-circle");
        Object.assign(objCircle1.style, styleCircle1);

        var styleCircle2 = {
            "color" : "black",
        };
        
        var objCircle2 = document.querySelector(".second-circle");
        Object.assign(objCircle2.style, styleCircle2);

        var styleCircle3 = {
            "color" : "grey",
        };
        
        var objCircle3 = document.querySelector(".third-circle");
        Object.assign(objCircle3.style, styleCircle3);

    };

    return(

        <div className="slidercomponent">

            <div className="slide-numbers-box">

                <div className="slide-numbers first-number" onClick={() => { Slide1(); }} >
                    <div className="number first-circle" > <i className="fa-solid fa-circle"></i>
                    </div>
                </div>
                <div className="slide-numbers second-number" onClick={ Slide2 } >
                    <div className="number second-circle" > <i className="fa-solid fa-circle"></i>
                    </div>
                </div>
                <div className="slide-numbers third-number" onClick={ Slide3 } >
                    <div className="number third-circle" > <i className="fa-solid fa-circle"></i>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="first-slide">
                    <div className="slide-text-1">
               
                        <p className="slide-para-1">NOW ONLY $7 - LIMITED TIME ONLY</p>
                     
                        <h1 className="slide-heading-1">Mix and Match Earring Set</h1>

                    </div>

                    <div className="slideimg-1">
        
                        <img src={slide1} />

                    </div>
                </div>

                <div className="second-slide">
                    <div className="slide-text-2">
                
                        <p className="slide-para-2">20% OFF ENGAGEMENT RINGS</p>
                    
                        <h1 className="slide-heading-2">Diamond Wedding Ring Sets</h1>

                    </div>

                    <div className="slideimg-2">
        
                        <img src={slide2} />

                    </div>
                </div>

                <div className="third-slide">
                    <div className="slide-text-3">

                        <p className="slide-para-3">UP TO 10% OFF - LIMITED TIME ONLY</p>
                                    
                        <h1 className="slide-heading-3">Gold Necklace Set</h1>

                    </div>

                    <div className="slideimg-3">
        
                        <img src={slide3} />

                    </div>
                </div>
            </div>

                    
        </div>

    );
}

export default Slider;
