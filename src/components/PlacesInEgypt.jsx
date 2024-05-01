import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiPaperAirplane } from "react-icons/hi";

export const PlacesInEgypt = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef();

    useEffect(() => {
        setActiveIndex(slideIndex);
    }, [slideIndex]);

    // Function to handle slide change
    const handleSlideChange = (index) => {
        setSlideIndex(index);
    };

    // Function to move to the next slide
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    // Function to move to the previous slide
    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 0,
    };

  return (
    <div className='placesInEgypt'>
        <h2>الاماكن السياحية المتوفرة في مصر</h2>

        <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
        {/* <div className="allPlaces"> */}
            <div className="eachPlace">
                <div className="placeImg">
                    <img src="/src/images/image3.png" alt=""  className='img1'/>
                </div>

                <div className="placeDetails">
                    <h3>الاهرامات,<span> الجيزة</span></h3>
                    <div className="eachDetail">
                        <span className='price'>1,200 LE</span>
                        <p><span>رحلة 10 أيام</span><HiPaperAirplane className='paperPlaneIcon'/></p>
                    </div>
                </div>
            </div>
            
            <div className="eachPlace">
                <div className="placeImg">
                    <img src="/src/images/image7.png" alt=""/>
                </div>

                <div className="placeDetails">
                    <h3>معبد الكرنك,<span> الاقصر</span></h3>
                    <div className="eachDetail">
                        <span className='price'>1,500 LE</span>
                        <p><span>رحلة 5 أيام</span><HiPaperAirplane className='paperPlaneIcon'/></p>
                    </div>
                </div>
            </div>
            
            <div className="eachPlace">
                <div className="placeImg">
                    <img src="/src/images/image8.png" alt="" />
                </div>

                <div className="placeDetails">
                    <h3>مسجد محمد علي ,<span> الاسكندرية</span></h3>
                    <div className="eachDetail">
                        <span className='price'>800 LE</span>
                        <p><span>رحلة 3 أيام</span><HiPaperAirplane className='paperPlaneIcon'/></p>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </Slider>

        <div className="arrows">
            <IoIosArrowForward className='nextArrow' onClick={nextSlide}/>
            <IoIosArrowBack className='prevArrow' onClick={previousSlide}/>
        </div>
    </div>
  )
}
