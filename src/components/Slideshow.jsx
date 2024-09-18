import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

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

    useEffect(() => {
        if(window.innerWidth < 767){
            
            document.querySelectorAll('#arrow').forEach((item) => {
                item.classList.remove("fa-6x")
                item.classList.add("fa-2xl")
            })
        }
      },[]);

    const Slides = pictures.map((pic, index) => 
            <div key={index} className={`App-slide ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${pic})` }}>
                        <button className="App-slide-leftarrow" onClick={goToPreviousSlide}>
                            <FontAwesomeIcon id="arrow" icon={faChevronLeft} size='6x'/>
                            <span className='sr-only'>Previous</span>
                        </button>
                        <button className="App-slide-rightarrow" onClick={goToNextSlide}>
                            <FontAwesomeIcon id="arrow" icon={faChevronRight} size='6x'/>
                            <span className='sr-only'>Next</span>
                        </button>
            </div>
    );

    return (
    <div className="slideshow-container">
        {Slides}
    </div>)
}

Slideshow.propTypes = {
    pictures: PropTypes.string
}

export default Slideshow