import React from "react";

const skillsContent = [
  {
    id: 1,
    name: "MongoDB",
    animDelay: "100",
    iconImg: '/img/skills/mongo.png'

  },
  {
    id: 2,
    name: "Javascript",
    animDelay: "100",
    iconImg: '/img/skills/js.png'

  },
  {
    id: 3,
    name: "React.js",
    animDelay: "100",
    iconImg: '/img/skills/react.png'
  },
  {
    id: 4,
    name: "Node.js",
    animDelay: "100",
    iconImg: '/img/skills/nodejs.png'
  },
  {
    id: 5,
    name: "Graphql",
    animDelay: "100",
    iconImg: '/img/skills/graphql.png'
  },
  {
    id: 6,
    name: "AWS",
    animDelay: "100",
    iconImg: '/img/skills/aws.png'
  },
  {
    id: 7,
    name: "Docker",
    animDelay: "100",
    iconImg: '/img/skills/docker.png'
  },
  {
    id: 8,
    name: "Cypress",
    animDelay: "100",
    iconImg: '/img/skills/cypress.png'
  },
  {
    id: 8,
    name: "Next.js",
    animDelay: "100",
    iconImg: '/img/skills/nextjs.png'
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
