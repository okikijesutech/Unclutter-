export default function Footer() {
  return (
    <footer className='bg-[rgb(var(--color-surface))] border-t border-[rgb(var(--color-border))]'>
      <div className='max-w-6xl mx-auto px-6 py-12 text-center'>
        <p className='text-lg font-medium mb-2'>Unclutter</p>
        <p className='text-sm text-[rgb(var(--color-text-muted))] mb-4'>
          Write it out. Clear your head.
        </p>
        <p className='text-xs text-[rgb(var(--color-text-muted))]'>
          © {new Date().getFullYear()} Unclutter
        </p>
      </div>
    </footer>
  );
}
