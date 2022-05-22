import React from "react";
import Container from "../../components/Container";
import ProjectInfo from "../../components/ProjectInfo";
import Head from "next/head";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project: data },
  };
};

const Project = ({ project }) => {
  return (
    <section>
      <Head>
        <title>Project {project.id}</title>
        <meta
          name="description"
          content={`Vladyslav's project ${project.id}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta itemProp="name" content="Project" />
        <meta
          itemProp="description"
          content={`Vladyslav's project ${project.id}`}
        />
      </Head>
      <Container>
        <ProjectInfo project={project} />
      </Container>
    </section>
  );
};

export default Project;
