import Container from "../components/Container";
import Head from "next/head";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Hi, I&apos;m Vladyslav</title>
        <meta name="description" content="Vladyslav's project" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta itemProp="name" content="Homepage" />
        <meta itemProp="description" content="Vladyslav's project" />
      </Head>
      <Container>
        <div className="flex flex-col items-center justify-center mb-40">
          <div className="mb-8 text-3xl">Hi, my name is</div>
          <h1 className="text-5xl text-center md:text-8xl">Vladyslav Petruk</h1>
        </div>
      </Container>
    </section>
  );
}
