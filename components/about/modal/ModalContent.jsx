import Achievements from "../Achievements";
import Education from "../Education";
import Experience from "../Experience";
import PersonalInfo from "../PersonalInfo";
import React from "react";

const ModalContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Personal Info</h3>
          <PersonalInfo />
          <div className="edina_tm_button">
            <a href="img/cv.pdf" download className="color">
              Download CV
            </a>
          </div>
        </div>
        {/* End  PersonalInfo */}

        <div className="col-6 achievements-wrapper">
          <h3>Achievements</h3>
          <Achievements />
        </div>
        {/* End  Achievements */}
      </div>
      {/* End .row */}

      <div className="row resume-box">
        <div className="col-6">
          <h3>Experience</h3>
          <Experience />
        </div>
        {/* End  Experience */}

        <div className="col-6">
          <h3>Education</h3>
          <Education />
        </div>
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;
