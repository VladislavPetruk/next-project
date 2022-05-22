import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Head from "next/head";

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
    level: "50",
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
      <Head>
        <title>Skills</title>
        <meta name="description" content="Vladyslav's Skills" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta itemProp="name" content="Skills" />
        <meta itemProp="description" content="Vladyslav's Skills" />
      </Head>
      <Container>
        <Title text="My skills" smallText="what i know"></Title>
        <div className="grid items-center md:grid-cols-2 gap-14">
          <div className="text-xl tracking-wide">
            <p>
              When working on projects, I had to work effectively with large
              amounts of information and quickly find high-quality solutions to
              complex problems. For this, I have acquired new skills, improved
              old skills, and can effectively apply the knowledge I have gained.
            </p>
          </div>
          <ul className="">
            {skills.map(({ id, title, level }) => (
              <li
                key={id}
                className={`relative flex items-center justify-between pb-2 mb-4 border-b-4 border-b-slate-600 before:absolute before:-bottom-1 before:left-0 before:bg-main-color before:h-1  before:w-[${level}]`}
              >
                <span className="text-xl">{title}</span>
                <span className="text-xl">{level}%</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
