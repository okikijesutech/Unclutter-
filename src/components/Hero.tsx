import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className='min-h-screen flex items-center'
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.8),
            rgba(255,255,255,0.8)
          ),
          url('/assets/hero-bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-4xl mx-auto px-6 text-center'
      >
        <h1 className='text-4xl md:text-6xl font-semibold text-[rgb(var(--color-text-dark))] mb-4'>
          Unclutter your mind.
        </h1>

        <p className='text-lg md:text-xl text-[rgb(var(--color-text-muted))] mb-8'>
          Write freely. Let go. Feel lighter.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-[rgb(var(--color-secondary))] text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition'>
            Join the waitlist
          </button>

          <button className='bg-white border border-[rgb(var(--color-border))] px-8 py-3 rounded-full text-[rgb(var(--color-text-dark))]'>
            Learn more
          </button>
        </div>
      </motion.div>
    </section>
  );
}
