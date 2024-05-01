import React from 'react'

export const EktshfFeatures = () => {
  return (
    <div className='features'>
        <h2>مميزات إكتشف</h2>

        <div className="allFeatures">
            <div className="eachFeature">
                <img src="/images/file.png" alt="" />
                <h3>تفاصيل مفصلة</h3>
                <p>يقدم التطبيق معلومات شاملة عن كل مكان سياحي، بما في ذلك التاريخ، والأنشطة المتاحة، والأوقات، والتكاليف.</p>
            </div>
            
            <div className="eachFeature">
                <img src="/images/electronic-ticket.png" alt="" />
                <h3>حجوزات مباشرة</h3>
                <p>يمكن للمستخدمين حجز الفنادق والتذاكر والجولات مباشرة من التطبيق</p>
            </div>
        
            <div className="eachFeature">
                <img src="/images/discount.png" alt="" />
                <h3>العروض والخصومات</h3>
                <p>يتيح التطبيق للمستخدمين استعراض العروض والخصومات المقدمة من شركات السياحة والفنادق والمطاعم في تلك الوجهة.</p>
            </div>
            
            <div className="eachFeature">
                <img src="/images/reaction.png" alt="" />
                <h3>توصيات شخصية</h3>
                <p>يقدم التطبيق توصيات شخصية للأماكن السياحية استنادًا إلى اهتمامات المستخدم وتاريخ تصفحه السابق.</p>
            </div>
        </div>
    </div>
  )
}
