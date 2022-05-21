import Image from "next/image";
import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Img from "/public/me-bg.png";

const about = () => {
  return (
    <section>
      <Container>
        <Title text="About me" smallText="who i am" />
        <div className="flex flex-col items-center justify-between md:flex-row gap-14">
          <div className="md:min-w-[400px] w-full text-center">
            <Image src={Img} alt="Vladyslav Petruk" width={400} height={400} />
          </div>
          <div className="text-xl tracking-wide">
            <p>I am a student of NTUU “Igor Sikorsky Kyiv Polytechnic Institute”
            who lives in Kyiv, Ukraine.</p>
            <br />
            <p>I strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design. I create successful
            websites that are fast, easy to use, and built with best practices.</p>
            <br />
            <p>In addition to my development work, i am active in football life. I
            am engaged in the review and analysis of football matches.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default about;
