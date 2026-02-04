export function TargetIcon({ className = "" }) {
  return (
    <svg viewBox='0 0 24 24' fill='none' className={className}>
      <circle cx='12' cy='12' r='8' stroke='currentColor' strokeWidth='1.8' />
      <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='1.8' />
    </svg>
  );
}
