import React from 'react'
import { Link } from 'react-router-dom'
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
        <div className="footerTop">
            <div className="footerContent">
                <div className="footerLogo">
                    <Link to="/">
                        <h3>اكتشف</h3>
                        <img src="/images/airplane.png"/>
                    </Link>
                </div>
                <p className='about'>اكتشف" هو تطبيق سياحي متكامل يهدف إلى تسهيل تجربة السفر للمسافرين عبر توفير معلومات شاملة ومميزات فريدة. يقدم التطبيق قائمة بالأماكن السياحية والعروض في العديد من الوجهات السياحية في جميع أنحاء العالم، مما يسمح للمستخدمين بتخطيط رحلاتهم بسهولة وثقة.</p>
            </div>

            <div className="footerContent">
                <h4>خريطة الموقع</h4>
                <ul>
                    <li><Link to="/">الرئيسية</Link></li>
                    <li><Link to="/الفنادق">الفنادق</Link></li>
                    <li><Link to="/المطاعم">المطاعم</Link></li>
                </ul>
            </div>
            
            <div className="footerContent">
                <h4>للتواصل</h4>
                <ul>
                    <li>مساعدة التعليمات</li>
                    <li>الاحكام</li>
                    <li>الشركات التبعة</li>
                </ul>
            </div>
            
            <div className="footerContent">
                <h4>أستكشف التطبيق</h4>

                <div className="footerBtns">
                    <div className="appleBtn">
                        <button><span className='appleIcon'><FaApple /></span>App Store</button>
                        <span>Download on the</span>
                    </div>
                    <img src="/images/google-play.png" alt="" className='androidBtn' />

                    <div className="socialMedia">
                        <FaFacebook className='eachIcon'/>
                        <FaInstagram className='eachIcon'/>
                        <FaXTwitter className='eachIcon'/>
                        <IoLogoLinkedin className='eachIcon'/>
                    </div>
                </div>
            </div>
        </div>

        <div className="footerBottom">
            <p><FaRegCopyright className='copyrights'/>  كل الحقوق محفوظه لشركه إكتشف لسنه 2024</p>
        </div>
    </footer>
  )
}
