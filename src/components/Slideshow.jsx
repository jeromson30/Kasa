import React, { useState } from 'react';
import LeftArrow from '../assets/images/arrow_back_ios-24px 1.png'
import RightArrow from '../assets/images/arrow_forward_ios-24px 1.png'

function Slideshow(props){
    const pictures = props.pictures
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % pictures.length;
        setCurrentIndex(nextIndex);
    };

    const goToPreviousSlide = () => {
        const previousIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        setCurrentIndex(previousIndex);
    };

    const Slides = pictures.map((pic, index) => 
            <div key={index} className={`App-slide ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${pic})` }}>
                        <button className="App-slide-leftarrow" onClick={goToPreviousSlide}>
                            <img src={LeftArrow} alt='Précedent'/>
                            <span className='sr-only'>Previous</span>
                            </button>
                        <button className="App-slide-rightarrow" onClick={goToNextSlide}>
                            <img src={RightArrow} alt='Suivant'/>
                            <span className='sr-only'>Next</span>
                        </button>
            </div>
    );

    return (
    <div className="slideshow-container">
        {Slides}
    </div>)
}

export default Slideshow