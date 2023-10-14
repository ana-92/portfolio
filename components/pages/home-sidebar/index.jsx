import { FaMoon, FaSun } from "react-icons/fa";
import React, { useEffect } from "react";

import About from "../../about/About";
import Address from "../../Address";
import HeaderMobile from "../../header/HeaderMobile";
import Hero from "../../hero/Hero";
import Portfolio from "../../portfolio/Portfolio";
import Sidebar from "../../header/Sidebar";
import Testimonial from "../../testimonial/Testimonial";
import { useState } from "react";

const EdinaHomeSidebar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");

    if (isDark) {
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
    }
    else {
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
    }
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div
      className={`home-light edina_tm_mainpart ${isDark ? "theme-dark" : ""}`}
    >
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>
              UNDER CONSTRUCTION
            </p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Recommendations</h3>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Thank you for taking the time to explore my portfolio. If you have any questions, or inquiries, I would love to hear from you.
              Please feel free to get in touch using the contact information below:
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default EdinaHomeSidebar;
