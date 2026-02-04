export default function Footer() {
  return (
    <footer className='bg-[rgb(var(--color-surface))] border-t border-[rgb(var(--color-border))]'>
      <div className='max-w-6xl mx-auto px-6 py-12 text-center'>
        <p className='text-lg font-medium text-[rgb(var(--color-text-dark))] mb-2'>
          Unclutter
        </p>

        <p className='text-[rgb(var(--color-text-muted))] mb-6'>
          🖊️ Write it out. Clear your head.
        </p>

        <p className='text-sm text-[rgb(var(--color-text-muted))]'>
          © {new Date().getFullYear()} Unclutter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
