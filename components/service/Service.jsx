import React, { useState } from "react";
import Modal from "react-modal";
import Tilt from "react-parallax-tilt";
import servicesData from "../../data/services";

Modal.setAppElement("#__next");

const Service = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBServicesData = (id) => {
    const find = servicesData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleBServicesData(id);
  };

  return (
    <div className="service_list">
      <ul>
        {servicesData.map((item) => (
          <li data-aos="fade-right" data-aos-duration="1200" key={item.id}>
            <Tilt>
              <div className="list_inner" onClick={() => handleModle(item?.id)}>
                <div className="hover">
                  <img className="svg custom" src={item.imgIcon} alt="icon" />
                  <div className="service_title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="learn_more">
                    Learn More<span></span>
                  </div>
                </div>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>

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
            <div className="description_wrap ">
              <div className="popup_informations">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${singleData?.popupImg})`,
                    }}
                  ></div>
                </div>
                {/* End big image */}

                <div className="description">
                  <h3>{singleData?.popupTitle}</h3>
                  {singleData?.firstDescriptionText}
                  {singleData?.serviceListDescriptions}
                </div>
              </div>
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal  */}
    </div>
  );
};

export default Service;
