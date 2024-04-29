import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiPaperAirplane } from "react-icons/hi";

export const PlacesInEgypt = () => {
  return (
    <div className='placesInEgypt'>
        <h2>الاماكن السياحية المتوفرة في مصر</h2>

        <div className="allPlaces">
            <div className="eachPlace">
                <div className="placeImg">
                    <img src="/src/images/image3.png" alt=""  className='img1'/>
                </div>

                <div className="placeDetails">
                    <div className="eachDetail">
                        <h3>الاهرامات,<span> الجيزة</span></h3>
                        <span className='price'>1,200 LE</span>
                    </div>
                    <p><span>رحلة 10 أيام</span><HiPaperAirplane className='paperPlaneIcon'/></p>
                </div>
            </div>
            
            <div className="eachPlace">
                <div className="placeImg">
                    <img src="/src/images/image7.png" alt=""/>
                </div>

                <div className="placeDetails">
                    <div className="eachDetail">
                        <h3>معبد الكرنك,<span> الاقصر</span></h3>
                        <span className='price'>1,500 LE</span>
                    </div>
                    <p><span>رحلة 5 أيام</span><HiPaperAirplane className='paperPlaneIcon'/></p>
                </div>
            </div>
            
            <div className="eachPlace">
                <div className="placeImg">
                    <img src="/src/images/image8.png" alt="" />
                </div>

                <div className="placeDetails">
                    <div className="eachDetail">
                        <h3>مسجد محمد علي ,<span> الاسكندرية</span></h3>
                        <span className='price'>800 LE</span>
                    </div>
                    <p><span>رحلة 3 أيام</span><HiPaperAirplane className='paperPlaneIcon'/></p>
                </div>
            </div>
        </div>

        <div className="arrows">
            <IoIosArrowForward className='nextArrow'/>
            <IoIosArrowBack className='prevArrow'/>
        </div>
    </div>
  )
}
