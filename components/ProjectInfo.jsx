import React from "react";
import Title from "./Title";
import { useRouter } from "next/router";

const ProjectInfo = ({ project }) => {
  const { title, body } = project || {};
  const router = useRouter();

  if (!project) {
    return <Title text="Project not found" />;
  }
  return (
    <>
      <Title smallText="About project" />
      <h1 className="text-4xl text-center mb-7">{title}</h1>
      <p className="mb-20 text-xl text-center">{body}</p>
      <button
        onClick={() => router.back()}
        className="block px-16 py-4 mx-auto text-xl text-white uppercase rounded-3xl bg-main-color"
      >
        Go back
      </button>
    </>
  );
};

export default ProjectInfo;
