import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const Reviews = () => {
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
        dots: true,
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
    <div className='reviews'>
        <h2>ما يقوله المستخدمين </h2>

        <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
            <div className="eachReview">
                <img src="/src/images/user1.png" alt="" />
                <h3>يوسف إبراهيم</h3>
                <p>لا يمكنني التحدث عن كتشف بكلمات كافية! كانت تجربتي معه ممتازة من البداية حتى النهاية. واجهة سهلة الاستخدام ومحتوى غني وممتعًا. لقد قمت بحجز الفنادق وحجز التذاكر من خلال التطبيق دون أي مشاكل،. أنا حقًا ممتن لهذا التطبيق!"</p>

                <div className="eachBG1">
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                </div>
            </div>
            
            <div className="eachReview">
                <img src="/src/images/user2.png" alt="" />
                <h3>أيمن علي</h3>
                <p>تجربة رائعة! لقد ساعدني كتشف في اكتشاف أماكن جديدة وفريدة خلال رحلتي الأخيرة إلى إيطاليا. كانت المعلومات المقدمة شاملة ومفيدة، وساعدتني في التخطيط لرحلتي بكل يسر وسهولة. أعجبتني أيضًا ميزة التذكيرات التي ساعدتني على عدم تفويت أي مناسبات أو جولات محجوزة مسبقًا. شكرًا لكتشف على جعل تجربة السفر تجربة لا تُنسى!"</p>

                <div className="eachBG2">
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                </div>
            </div>

            <div className="eachReview">
                <img src="/src/images/user3.png" alt="" />
                <h3>علياء حسن</h3>
                <p>تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"</p>

                <div className="eachBG3">
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                </div>
            </div>
        </Slider>

        <div className="arrows">
            <IoIosArrowForward className='nextArrow' onClick={nextSlide}/>
            <IoIosArrowBack className='prevArrow' onClick={previousSlide}/>
        </div>
    </div>
  )
}
