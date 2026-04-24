export function PageWrapper({ children }) {
  return (
    <div className="bg-gradient-to-b from-[#121815] to-[#0F1412] flex min-h-screen flex-col bg-bg text-text-primary">
      {children}
    </div>
  );
}
