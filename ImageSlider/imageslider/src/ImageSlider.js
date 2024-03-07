import { useState } from "react";

const ImageSlider = ({slides}) => {

    console.log(slides);

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyle={
        height: '100%',
        position: 'relative'
    }
    const slideStyle = {
        width: '100%',
        height: '100%',
        backgroudPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '10px',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles ={
        position: 'absolute',
        top: '50%',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
        transform: 'translate(0,-50%)'
    }

    const rightArrowStyles={
        position: 'absolute',
        top: '50%',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: '1',
        cursor: 'pointer',
        transform: 'translate(0,-50%)'
    }

    const dotsContainer = {
        display: 'flex',
        justifyContent: "center",
        marginTop: '12px'
    }

    const dotsStyle = {
        padding: '0px 12px',
        cursor: 'pointer',
        fontSize: '15px'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div style={sliderStyle}>
            <div style={leftArrowStyles} onClick={goToPrevious}>⇦</div>
            <div style={rightArrowStyles} onClick={goToNext}>⇨</div>
            <div style={slideStyle}>
            </div>
            <div style={dotsContainer}>
                {slides.map((slide, slideIndex)=>(
                    <div key={slideIndex} style={dotsStyle} onClick={()=>goToSlide(slideIndex)}>●</div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;