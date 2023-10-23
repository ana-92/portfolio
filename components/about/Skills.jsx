import Image from "next/image";
import React from "react";
import awsImg from "../../public/img/skills/aws.svg";
import cypressImg from "../../public/img/skills/cypress.svg";
import dockerImg from "../../public/img/skills/docker.svg";
import graphqlImg from "../../public/img/skills/graphql.svg";
import mongoImg from "../../public/img/skills/mongo.svg";
import nextImg from "../../public/img/skills/next.svg";
import nodeImg from "../../public/img/skills/node.svg";
import reactImg from "../../public/img/skills/react.svg";
import tsImg from "../../public/img/skills/typescript.svg";

const skillsContent = [
  {
    id: 1,
    name: "MongoDB",
    animDelay: "100",
    iconImg: mongoImg

  },
  {
    id: 2,
    name: "Typescript",
    animDelay: "100",
    iconImg: tsImg

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
