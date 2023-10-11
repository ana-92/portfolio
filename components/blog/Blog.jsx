import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import blogsData from "../../data/blogs";
import Social from "../Social";

Modal.setAppElement("#__next");

const Blog = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleblogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleblogsData(id);
  };

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_inner my_carousel" id="modal">
        <ul>
          <Slider {...settings}>
            {blogsData.map((item) => (
              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
                key={item.id}
              >
                <div className="list_inner">
                  <div className="image" onClick={() => handleModle(item?.id)}>
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="news_details">
                    <span>
                      {item.date} <a href="#">{item.meta}</a>
                    </span>
                    <h3 className="title" onClick={() => handleModle(item?.id)}>
                      {item.title}
                    </h3>
                  </div>
                  {/* End details */}
                </div>
                {/* End list inner */}
              </li>
            ))}
          </Slider>
        </ul>

        {/* Start Modal  */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={() => setIsOpen(false)}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${singleData?.img})`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="news_details">
                  <span>
                    {singleData?.date} <a href="#">{singleData?.meta}</a>
                  </span>
                  <h3 className="title">{singleData?.title}</h3>
                </div>
                {/* End details */}

                <div className="main_content">
                  <div className="descriptions">
                    {singleData?.descriptionText1}
                    <div className="quotebox">{singleData?.blockquote}</div>
                    {singleData?.descriptionText2}
                  </div>
                  {/* End description */}

                  <div className="news_share ">
                    <span>Share:</span>
                    <Social />
                  </div>
                  {/* End news share */}
                </div>
              </div>
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End modal  */}
      </div>
    </>
  );
};

export default Blog;
