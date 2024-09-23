// src/components/Header.jsx
import React from 'react';
import Slider from 'react-slick';

// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import custom styles for the header (optional)
import './header.css';

const HeaderSection = () => {
  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 900, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll per swipe
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Autoplay interval in milliseconds
    arrows: true, // Show arrows for navigation
  };

  return (
    <>
      <header className=" w-svwheader md:block hidden">
        <Slider {...settings}>
          <div className="item">
            <img src="/images/cYZHzpIx_4x.jpg" alt="Slide 1" />
            <div className="overlay">
              <h2>Welcome to Our Website</h2>
              <p>"At <span>Sagar Library</span>, a peaceful environment, flexible shifts, and modern amenities empower students
                to focus and excel. Study hard stay dedicated and achieve your goals in the best setting.""
              </p>
            </div>
          </div>
          <div className="item">
            <img src="/images/ebmBWZTx_4x.jpg" alt="Slide 2" />
            <div className="overlay">
              <h2>Discover New Features</h2>
              <p>"At <span>Sagar Library</span>, a peaceful environment, flexible shifts, and modern amenities empower students
                to focus and excel. Study hard stay dedicated and achieve your goals in the best setting.""
              </p>
            </div>
          </div>
          <div className="item">
            <img src="/images/cYZHzpIx_4x.jpg" alt="Slide 3" />
            <div className="overlay">
              <h2>Join Our Community</h2>
              <p>"At <span>Sagar Library</span>, a peaceful environment, flexible shifts, and modern amenities empower students
                to focus and excel. Study hard stay dedicated and achieve your goals in the best setting.""
              </p>
            </div>
          </div>
        </Slider>

      </header>


      {/* for mobile  */}

      <header className="header md:hidden block">
        <Slider {...settings}>
          <div className="item">
            <img src="/images/JgMLIBZl_4x.jpg" alt="Slide 1" />
            <div className="overlay">
              <h2>Welcome to Our Website</h2>
              <p>"At <span>Sagar Library</span>, a peaceful environment, flexible shifts, and modern amenities empower students
                to focus and excel. Study hard stay dedicated and achieve your goals in the best setting.""
              </p>
            </div>
          </div>
          <div className="item">
            <img src="/images/TuKEHvNy_4x.jpg" alt="Slide 2" />
            <div className="overlay">
              <h2>Discover New Features</h2>
              <p>"At <span>Sagar Library</span>, a peaceful environment, flexible shifts, and modern amenities empower students
                to focus and excel. Study hard stay dedicated and achieve your goals in the best setting.""
              </p>
            </div>
          </div>
          <div className="item">
            <img src="/images/ZXEb9QiW_4x.jpg" alt="Slide 3" />
            <div className="overlay">
              <h2>Join Our Community</h2>
              <p>"At <span>Sagar Library</span>, a peaceful environment, flexible shifts, and modern amenities empower students
                to focus and excel. Study hard stay dedicated and achieve your goals in the best setting.""
              </p>
            </div>
          </div>
        </Slider>

      </header>

    </>

  );
};

export default HeaderSection;
