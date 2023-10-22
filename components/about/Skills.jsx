import React from "react";

const skillsContent = [
  {
    id: 1,
    name: "MongoDB",
    animDelay: "100",
    iconImg: '/img/skills/mongo.svg'

  },
  {
    id: 2,
    name: "Javascript",
    animDelay: "100",
    iconImg: '/img/skills/js.svg'

  },
  {
    id: 3,
    name: "React.js",
    animDelay: "100",
    iconImg: '/img/skills/react.svg'
  },
  {
    id: 4,
    name: "Node.js",
    animDelay: "100",
    iconImg: '/img/skills/nodejs.svg'
  },
  {
    id: 5,
    name: "Graphql",
    animDelay: "100",
    iconImg: '/img/skills/graphql.svg'
  },
  {
    id: 6,
    name: "AWS",
    animDelay: "100",
    iconImg: '/img/skills/aws.svg'
  },
  {
    id: 7,
    name: "Docker",
    animDelay: "100",
    iconImg: '/img/skills/docker.svg'
  },
  {
    id: 8,
    name: "Cypress",
    animDelay: "100",
    iconImg: '/img/skills/cypress.svg'
  },
  {
    id: 8,
    name: "Next.js",
    animDelay: "100",
    iconImg: '/img/skills/next.svg'
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
              <img src={item.iconImg} />
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
