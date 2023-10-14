import React from "react";

const skillsContent = [
  {
    name: "MongoDB",

  },
  {
    name: "Express.js",

  },
  {
    name: "React.Js",

  },
  {
    name: "Node.js",

  },
  {
    name: "Graphql",

  },
  {
    name: "AWS",

  },
  {
    name: "Docker",

  },
  {
    name: "Cypress",

  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <div className="icon">
            {/* <img src="img/about/book.png" alt="icon" /> */}
            <span className="label">{`- ${val.name}`}</span>
          </div>

        </div>

      ))}
    </>
  );
};

export default Skills;
