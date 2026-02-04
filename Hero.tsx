import { Button, Container } from "@mui/material";

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center bg-gray-50'>
      <Container maxWidth='md' className='text-center space-y-6'>
        <h1 className='text-5xl font-bold text-gray-900'>
          Unclutter your mind.
          <br /> One page at a time.
        </h1>

        <p className='text-xl text-gray-600'>
          🖊️ Write it out. Clear your head.
        </p>

        <p className='text-gray-500 max-w-xl mx-auto'>
          A calm writing space designed to help you release mental clutter,
          think clearly, and focus on what matters.
        </p>

        <Button
          size='large'
          variant='contained'
          sx={{
            backgroundColor: "#111827",
            "&:hover": { backgroundColor: "#000" },
            borderRadius: "9999px",
            px: 5,
            py: 1.5,
          }}
        >
          Pre-Order Early Access
        </Button>
      </Container>
    </section>
  );
}
