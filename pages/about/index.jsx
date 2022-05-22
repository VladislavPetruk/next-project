import Image from "next/image";
import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Img from "/public/me-bg.png";
import Head from "next/head";

const about = () => {
  return (
    <section>
      <Head>
        <title>About me</title>
        <meta name="description" content="Vladyslav's info" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta itemProp="name" content="About me" />
        <meta itemProp="description" content="Vladyslav's info" />
      </Head>
      <Container>
        <Title text="About me" smallText="who i am" />
        <div className="flex flex-col items-center justify-between md:flex-row gap-14">
          <div className="md:min-w-[400px] w-full text-center">
            <Image src={Img} alt="Vladyslav Petruk" width={400} height={400} />
          </div>
          <div className="text-xl tracking-wide">
            <p>
              During my studies at university, I started to learn the basics of
              frontend, and a year later I started to gain experience in a web
              studio. I started creating layouts and little by little I learned
              gained experience and carried out small turnkey projects. At the
              same time, I deepened my knowledge of working with wordpress and
              Opencart.
            </p>
            <br />
            <p>
              During my work I have achieved the following results: at least 3
              company websites from scratch, many minor changes to existing
              websites, the ability to work in a team, and work directly with
              the client. It&apos;s important to note that at the same time I
              started to deepen my knowledge of JavaScript and started to learn
              React.
            </p>
            <br />
            <p>
              Also, I learned how to get out of stressful situations, manage
              time effectively, correctly search for the necessary information,
              work with documentation in English and offer my ideas to solve
              tasks.
            </p>
            <br />
            <p>
              In addition to my development work, i am active in football life.
              I am engaged in the review and analysis of football matches.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default about;
