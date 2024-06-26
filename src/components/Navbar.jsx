import React, { useState } from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    
  return (
    <nav>
        <div className="logo">
            <Link to="/">
                <h3>اكتشف</h3>
                <img src="/images/airplane.png"/>
            </Link>
        </div>

        <div className={`navTabs ${menuOpen ? 'menuOpen' : ''}`}>
            <ul className='navLinks'>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="">الرئيسية</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/الحجوزات">الحجوزات</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/الرحلات الجوية">الرحلات الجوية</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/الفنادق">الفنادق</NavLink></li>
                <li><NavLink className={({isPending, isActive})=>isPending? "pending" : isActive? "active" : ""} to="/المطاعم">المطاعم</NavLink></li>
            </ul>

            <div className="navIcons">
                <div className="language">
                    <ul>
                        <li>
                            <span><FaEarthAmericas /></span>
                            <span className='lang'>Ar</span>
                            <span ><IoIosArrowDown /></span>
                        </li>
                    </ul>
                </div>

                <div className="menuIcon">
                    <label htmlFor="menu">{menuOpen ? <IoMdClose/> : <IoMdMenu/>}</label>
                    <input type="checkbox" id="menu" onChange={handleMenuToggle} />
                </div>
            </div>
        </div>

    </nav>
  )
}
