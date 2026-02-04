import { Container } from "@mui/material";

const reviews = [
  { name: "Clara", text: "Unclutter feels like silent space for my thoughts." },
  { name: "Olu", text: "I finally get things out of my head with ease." },
  { name: "Amaka", text: "The calm interface makes writing joyful." },
];

export default function Testimonials() {
  return (
    <section className='bg-gray-100 py-20'>
      <Container maxWidth='lg' className='text-center'>
        <h2 className='text-3xl font-bold mb-8'>Testimonials</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {reviews.map((rev, i) => (
            <div key={i} className='bg-white p-6 rounded-lg shadow'>
              <p className='text-gray-700 mb-4'>“{rev.text}”</p>
              <p className='font-semibold'>{rev.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
