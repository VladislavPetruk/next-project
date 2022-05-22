import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos/?_page=1&_limit=5"
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: data },
  };
};

const Portfolio = ({ projects }) => {
  return (
    <section>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Vladyslav's projects" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta itemProp="name" content="Portfolio" />
        <meta itemProp="description" content="Vladyslav's projects" />
      </Head>
      <Container>
        <Title text="My works" smallText="what i done" />
        <div className="mb-3 text-xl text-center">
          *Used resource{" "}
          <a
            className="text-main-color"
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noreferrer"
          >
            jsonplaceholder
          </a>
        </div>
        <div className="grid items-center md:grid-cols-2 xl:grid-cols-3 gap-14">
          {projects &&
            projects.map((item) => (
              <article key={item?.id}>
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-3 text-center transition-opacity opacity-0 hover:opacity-100 bg-slate-400/70">
                    <h2 className="mb-8 text-xl text-white capitalize">
                      {item?.title}
                    </h2>
                    <Link href={`/portfolio/${item?.id}`}>
                      <a className="block px-8 py-3 mx-auto text-xl text-white uppercase transition-all hover:opacity-75 hover:text-white rounded-3xl bg-main-color">
                        View project
                      </a>
                    </Link>
                  </div>
                  <img
                    loading="lazy"
                    src={item?.url}
                    alt={item?.title}
                    height={400}
                    width={400}
                    layout="fill"
                  />
                </div>
              </article>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
