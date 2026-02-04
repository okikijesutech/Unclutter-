import { Container } from "@mui/material";

export default function Benefits() {
  return (
    <section className='py-24 bg-white'>
      <Container maxWidth='md'>
        <h2 className='text-3xl font-semibold mb-8'>
          What Unclutter helps you do
        </h2>

        <ul className='space-y-4 text-gray-600'>
          <li>🧠 Clear mental overload</li>
          <li>✍️ Think more clearly</li>
          <li>🌿 Reduce stress & anxiety</li>
          <li>🎯 Focus on what matters</li>
        </ul>
      </Container>
    </section>
  );
}
