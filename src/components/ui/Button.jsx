export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`rounded-lg font-bold transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
