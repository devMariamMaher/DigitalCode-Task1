import React from 'react'
import { FaApple } from 'react-icons/fa6'

export const DownloadApp = () => {
  return (
    <div className='downloadApp'>
        <img src="/images/download-app-bg.png" alt="" />

        <div className="dAContent">
            <h2>حمل الان التطبيق واستمتع بتكلفة رحلات ارخص واوفر لك ولعائلتك </h2>

            <div className="appBtns">
                <div className="dAAppleBtn">
                    <button><span className='appleIcon'><FaApple /></span><span>Download on the</span>App Store</button>
                    
                </div>
                <img src="/images/google-play.png" alt="" className='androidBtn' />
            </div>
        </div>
    </div>
  )
}
