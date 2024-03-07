import { useCallback, useEffect, useRef, useState } from "react";

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

const slideContainerStyle = {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s'
}

const slidesContainerOverflowStyle = {
    overflow: 'hidden',
    height: '100%'
}

const ImageSlider = ({slides, parentWidth}) => {

    // console.log(slides);

    const timerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const getSlideStyleswithBackground = (slideIndex) => ({
        ...slideStyle,
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}px`
    });
    
    const getSlidesContainerStyleswithWidth = () => ({
        ...slideContainerStyle,
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`
    })

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    },[currentIndex, slides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(()=>{
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        console.log('use Effect');
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 2000);
        console.log(timerRef);
        return () => clearTimeout(timerRef.current);
    },[goToNext]);

    return (
        <div style={sliderStyle}>
            <div style={leftArrowStyles} onClick={goToPrevious}>⇦</div>
            <div style={rightArrowStyles} onClick={goToNext}>⇨</div>
            <div style={slidesContainerOverflowStyle}>
            <div style={getSlidesContainerStyleswithWidth()}>
                {slides.map((_, slideIndex)=>(
                    <div key={slideIndex} style={getSlideStyleswithBackground(slideIndex)}></div>
                ))}
                </div>
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