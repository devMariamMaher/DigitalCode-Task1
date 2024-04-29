import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

export const Reviews = () => {
  return (
    <div className='reviews'>
        <h2>ما يقوله المستخدمين </h2>

        <div className="allReviews">
            <div className="eachReview">
                <img src="/src/images/user1.png" alt="" />
                <h3>يوسف إبراهيم</h3>
                <p>لا يمكنني التحدث عن كتشف بكلمات كافية! كانت تجربتي معه ممتازة من البداية حتى النهاية. واجهة سهلة الاستخدام ومحتوى غني وممتعًا. لقد قمت بحجز الفنادق وحجز التذاكر من خلال التطبيق دون أي مشاكل،. أنا حقًا ممتن لهذا التطبيق!"</p>

                <div className="eachBG1">
                    <img src="/src/images/review1-bg.png" alt="" />
                </div>
            </div>
            
            <div className="eachReview">
                <img src="/src/images/user2.png" alt="" />
                <h3>أيمن علي</h3>
                <p>تجربة رائعة! لقد ساعدني كتشف في اكتشاف أماكن جديدة وفريدة خلال رحلتي الأخيرة إلى إيطاليا. كانت المعلومات المقدمة شاملة ومفيدة، وساعدتني في التخطيط لرحلتي بكل يسر وسهولة. أعجبتني أيضًا ميزة التذكيرات التي ساعدتني على عدم تفويت أي مناسبات أو جولات محجوزة مسبقًا. شكرًا لكتشف على جعل تجربة السفر تجربة لا تُنسى!"</p>

                <div className="eachBG2">
                    <img src="/src/images/review2-bg.png" alt="" />
                </div>
            </div>

            <div className="eachReview">
                <img src="/src/images/user3.png" alt="" />
                <h3>علياء حسن</h3>
                <p>تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"</p>

                <div className="eachBG3">
                    <img src="/src/images/review3-bg.png" alt="" />
                </div>
            </div>
        </div>

        <div className="arrows">
            <IoIosArrowForward className='nextArrow'/>
            <IoIosArrowBack className='prevArrow'/>
        </div>

        {/* <div className="navDots">
            <HiOutlineDotsHorizontal className='3Dots'/>
            <GoDotFill className='dot1'/>
            <GoDotFill className='do2'/>
        </div> */}
    </div>
  )
}
