import { Button, Container } from "@mui/material";

export default function Hero() {
  return (
    <section
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>

      <Container
        maxWidth='md'
        className='relative z-10 text-center text-white space-y-6'
      >
        <h1 className='text-6xl font-bold'>Unclutter your mind.</h1>

        <p className='text-2xl'>🖊️ Write it out. Clear your head.</p>

        <Button
          variant='contained'
          size='large'
          sx={{
            backgroundColor: "#ffffff",
            color: "#111827",
            fontWeight: 700,
            "&:hover": { backgroundColor: "#f3f4f6" },
          }}
        >
          Pre-Order Now
        </Button>
      </Container>
    </section>
  );
}
