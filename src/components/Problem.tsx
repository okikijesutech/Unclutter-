import { Container } from "@mui/material";

export default function Problem() {
  return (
    <section className='py-24 bg-white'>
      <Container maxWidth='md' className='space-y-6'>
        <h2 className='text-3xl font-semibold'>
          Your mind is full. That’s not your fault.
        </h2>

        <p className='text-gray-600'>
          Notes scattered across apps. Thoughts stuck in your head. Journals you
          never return to.
        </p>

        <p className='text-gray-600'>
          Most tools add more noise.
          <strong> Unclutter removes it.</strong>
        </p>
      </Container>
    </section>
  );
}
