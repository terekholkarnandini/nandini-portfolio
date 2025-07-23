import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", img: "/images/html.png" },
  { name: "CSS", img: "/images/css.png" },
  { name: "JavaScript", img: "/images/javascript.png" },
  {name:"Python",img:"/images/python.png"},
  { name: "React", img: "/images/react.png" },
  { name: "Node.js", img: "/images/node.png" },
  {name:"Express.js" ,img:"/images/express.png"},
  { name: "PHP", img: "/images/php.png" },
  { name: "MySQL", img: "/images/mysql.png" },
  {name: "Java" ,img:"/images/java.png"},
  { name: "Git", img: "/images/git.png" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">SKILLS</h2>
      <p className="skills-subtitle">Turning ideas into smooth user experiences, from frontend to backend.</p>

      <div className="skills-icons">
        {skills.map((skill, index) => (
          <div className="skill-circle" key={index}>
            <img src={skill.img} alt={skill.name} />
            <div className="skill-overlay">
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
