import React from "react";

const skillsContent = [
  {
    name: "MongoDB",
    skillPercent: "95",
  },
  {
    name: "Express.js",
    skillPercent: "95",
  },
  {
    name: "React.Js",
    skillPercent: "95",
  },
  {
    name: "Node.js",
    skillPercent: "95",
  },
  {
    name: "Graphql",
    skillPercent: "95",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
