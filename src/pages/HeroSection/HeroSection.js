import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    // <div>

    //     <source src="4318387-hd_1920_1080_30fps.mp4" type='video/mp4'/>
      
    // </div>
    <div className='hero-video-container'>
        <video className='hero-video' autoPlay loop muted>
            <source  src='/4318387-hd_1920_1080_30fps.mp4' type='video/mp4'/>

        </video>
       

    </div>

    

//     <video className="hero-video" autoPlay loop muted>
//   <source src="/4318387-hd_1920_1080_30fps.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>
  )
}

export default HeroSection
