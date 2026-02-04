import { Container } from "@mui/material";

const benefitsList = [
  { icon: "🧠", title: "Clear mental overload" },
  { icon: "✍️", title: "Think more clearly" },
  { icon: "🌿", title: "Reduce stress & anxiety" },
  { icon: "🎯", title: "Focus on what matters" },
];

export default function Benefits() {
  return (
    <section className='bg-gray-50'>
      <Container
        maxWidth='lg'
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'
      >
        {benefitsList.map((item, idx) => (
          <div
            key={idx}
            className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'
          >
            <div className='text-4xl mb-4'>{item.icon}</div>
            <h3 className='font-semibold text-lg'>{item.title}</h3>
          </div>
        ))}
      </Container>
    </section>
  );
}
