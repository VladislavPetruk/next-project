import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";

const skills = [
  {
    id: "1",
    title: "Html",
    level: "95",
  },
  {
    id: "2",
    title: "Css",
    level: "85",
  },
  {
    id: "3",
    title: "JavaScript",
    level: "60",
  },
  {
    id: "4",
    title: "React",
    level: "3/6",
  },
  {
    id: "5",
    title: "Responsive Design",
    level: "80",
  },
  {
    id: "6",
    title: "Wordpress",
    level: "50",
  },
];

const Skills = () => {
  return (
    <section>
      <Container>
        <Title text="My skills" smallText="what i know"></Title>
        <div className="grid items-center md:grid-cols-2 gap-14">
          <div className="text-xl tracking-wide">
            <p>
              While working on projects, I had to work effectively with large
              amounts of information, quickly find high-quality solutions to
              complex problems. To do this, I have mastered new skills, improved
              old skills and can effectively apply the knowledge gained.
            </p>
          </div>
          <ul className="">
            {skills.map(({ id, title, level }) => (
              <li
                key={id}
                className={`relative flex items-center justify-between pb-2 mb-4 border-b-4 border-b-slate-600 before:absolute before:-bottom-1 before:left-0 before:bg-main-color before:h-1  before:w-[${level}]`}
              >
                <span className="w-0.2">{title}</span>
                <span className={`w-[${level}%]`}>{level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
