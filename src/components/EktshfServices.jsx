import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const EktshfServices = () => {
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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  return (
    <div className='services'>
        <h2>خدمات إكتشف</h2>

        <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
            {/* <div className="allServices"> */}
                <div className="eachService">
                    <img src="/src/images/audio-message.png" alt="" />
                    <h3>ميزة التوجيه الصوتي</h3>
                    <p>يتيح التطبيق التوجيه الصوتي للمستخدمين أثناء السفر  وجعل الرحله أكثر متعة وسهولة وفرادة.</p>
                </div>
                
                <div className="eachService">
                    <img src="/src/images/tour-guide.png" alt="" />
                    <h3>مرشدين سياحيين افتراضيين</h3>
                    <p>يمكن للمستخدمين التواصل مع مرشدين سياحيين افتراضيين للحصول على استشارات ونصائح مباشرة.</p>
                </div>
                
                <div className="eachService">
                    <img src="/src/images/travel-insurance.png" alt="" />
                    <h3>تنبيهات الأمان والسفر</h3>
                    <p>يقدم التطبيق تنبيهات فورية حول أي مشاكل أمنية أو تغييرات في الجدول الزمني للرحلات.</p>
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
