import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error, page not found</title>
        <meta name="description" content="Error, page not found" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta itemProp="name" content="Error, page not found" />
        <meta itemProp="description" content="Error, page not found" />
      </Head>
      <div>Error, nonexistent address</div>
    </>
  );
};

export default Error;
