import React, { useState } from 'react';


function Slideshow(props){
    const pictures = props.pictures
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % pictures.length;
        console.log(nextIndex)
        setCurrentIndex(nextIndex);
    };

    const goToPreviousSlide = () => {
        const previousIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        console.log(previousIndex)
        setCurrentIndex(previousIndex);
    };

    const Slides = pictures.map((pic, index) => 
            <div key={index} className={`App-slide ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${pic})` }}>
                        <button onClick={goToPreviousSlide}>Previous</button>
                        <button onClick={goToNextSlide}>Next</button>
            </div>
    );

    return (
    <div className="slideshow-container">
        {Slides}

    </div>)
}

export default Slideshow