import { Container } from "@mui/material";

export default function HowItWorks() {
  return (
    <section className='py-24 bg-gray-50'>
      <Container maxWidth='lg'>
        <h2 className='text-3xl font-semibold text-center mb-12'>
          Designed for thinking, not managing
        </h2>

        <div className='grid md:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='font-semibold text-lg'>Open a blank page</h3>
            <p className='text-gray-500'>No templates. No pressure.</p>
          </div>

          <div>
            <h3 className='font-semibold text-lg'>Write freely</h3>
            <p className='text-gray-500'>Thoughts, ideas, worries.</p>
          </div>

          <div>
            <h3 className='font-semibold text-lg'>Walk away lighter</h3>
            <p className='text-gray-500'>Mental clarity, restored.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
