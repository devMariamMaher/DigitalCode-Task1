import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const EktshfServices = () => {
  return (
    <div className='services'>
        <h2>خدمات إكتشف</h2>

        <div className="allServices">
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
        </div>

        <div className="arrows">
            <IoIosArrowForward className='nextArrow'/>
            <IoIosArrowBack className='prevArrow'/>
        </div>
    </div>
  )
}
