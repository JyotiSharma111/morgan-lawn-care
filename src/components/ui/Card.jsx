export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-bg-card/95 p-5 shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
