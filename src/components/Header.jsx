import React from 'react'
import { FaCircle } from "react-icons/fa6";


export const Header = () => {
  return (
    <div className='header'>
        <div className="headerImg">
            <img src="/src/images/tourest-holding-something.png" alt="" className='touristImg'/>
        </div>

        <div className="headerContent">
            <h3>الرحلات معنا</h3>
            <h1>إكتشف</h1>
            <p>سهولة حجز رحلاتك من أي مكان وفي أي وقت و بأقل التكاليف.</p>
            <p>احجز الأن واستمتع بعروض الصيف انت و عائلتك بأقل الاسعار  </p>
            <button className='btn'>أحجز الأن</button>
        </div>
    </div>
  )
}
