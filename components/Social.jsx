import {
  FiGithub,
  FiLinkedin
} from "react-icons/fi";

import React from "react";

const SocialShare = [

  { iconName: <FiGithub />, link: "https://github.com/ana-92" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/ana-izaguirre-096369128/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
