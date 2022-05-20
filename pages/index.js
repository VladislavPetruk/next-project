import Container from "../components/Container";

export default function Home() {
  
  return (
    <section>
      <Container>
        <div className='flex flex-col items-center justify-center mb-40'>
          <div className="mb-8 text-3xl">Hello, my name is</div>
          <h1 className="text-5xl text-center md:text-8xl">Vladyslav Petruk</h1>
        </div>
      </Container>
    </section>
  )
}
