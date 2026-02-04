import { motion } from "framer-motion";

const steps = [
  {
    title: "Open a blank page",
    text: "No templates. No pressure.",
  },
  {
    title: "Write freely",
    text: "Thoughts, worries, ideas.",
  },
  {
    title: "Walk away lighter",
    text: "Mental clarity, restored.",
  },
];

export default function HowItWorks() {
  return (
    <section className='py-24 bg-[rgb(var(--color-surface))]'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-semibold mb-12 text-[rgb(var(--color-text-dark))]'>
          Designed for thinking, not managing
        </h2>

        <div className='grid gap-8 md:grid-cols-3'>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='bg-white rounded-3xl p-6 border border-[rgb(var(--color-border))]'
            >
              <h3 className='font-medium text-lg mb-2'>{step.title}</h3>
              <p className='text-[rgb(var(--color-text-muted))]'>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
