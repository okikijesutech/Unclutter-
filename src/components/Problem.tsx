export default function Problem() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-3xl mx-auto px-6 space-y-6'>
        <h2 className='text-3xl font-semibold text-[rgb(var(--color-text-dark))]'>
          Your mind is full. That’s not your fault.
        </h2>

        <p className='text-[rgb(var(--color-text-muted))]'>
          Thoughts pile up. Notes scatter. Journals get abandoned.
        </p>

        <p className='text-[rgb(var(--color-text-muted))]'>
          Most tools add more noise.
          <strong className='text-[rgb(var(--color-text-dark))]'>
            {" "}
            Unclutter removes it.
          </strong>
        </p>
      </div>
    </section>
  );
}
