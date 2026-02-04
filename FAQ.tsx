import { Container } from "@mui/material";

export default function FAQ() {
  return (
    <section className='py-24 bg-white'>
      <Container maxWidth='md'>
        <h2 className='text-3xl font-semibold mb-8'>FAQ</h2>

        <div className='space-y-6 text-gray-600'>
          <p>
            <strong>Who is this for?</strong>
            <br />
            Anyone who wants mental clarity.
          </p>
          <p>
            <strong>Is this a journaling app?</strong>
            <br />
            It’s a thinking space.
          </p>
          <p>
            <strong>When is launch?</strong>
            <br />
            Soon. Early access gets first entry.
          </p>
        </div>
      </Container>
    </section>
  );
}
