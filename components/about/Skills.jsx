import Image from "next/image";
import React from "react";
import awsImg from "../../public/img/skills/aws.png";
import cypressImg from "../../public/img/skills/cypress.png";
import dockerImg from "../../public/img/skills/docker.png";
import graphqlImg from "../../public/img/skills/graphql.png";
import jsImg from "../../public/img/skills/js.png";
import mongoImg from "../../public/img/skills/mongo.png";
import nextImg from "../../public/img/skills/nextjs.png";
import nodeImg from "../../public/img/skills/node.png";
import reactImg from "../../public/img/skills/react.png";

const skillsContent = [
  {
    id: 1,
    name: "MongoDB",
    animDelay: "100",
    iconImg: mongoImg

  },
  {
    id: 2,
    name: "Javascript",
    animDelay: "100",
    iconImg: jsImg

  },
  {
    id: 3,
    name: "React.js",
    animDelay: "100",
    iconImg: reactImg
  },
  {
    id: 4,
    name: "Node.js",
    animDelay: "100",
    iconImg: nodeImg
  },
  {
    id: 5,
    name: "Graphql",
    animDelay: "100",
    iconImg: graphqlImg
  },
  {
    id: 6,
    name: "AWS",
    animDelay: "100",
    iconImg: awsImg
  },
  {
    id: 7,
    name: "Docker",
    animDelay: "100",
    iconImg: dockerImg
  },
  {
    id: 8,
    name: "Cypress",
    animDelay: "100",
    iconImg: cypressImg
  },
  {
    id: 8,
    name: "Next.js",
    animDelay: "100",
    iconImg: nextImg
  },
];

const Skills = () => {
  return (
    <ul className="wrapper">
      {skillsContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <Image src={item.iconImg} alt="icon" className="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <ul>{item.name}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
