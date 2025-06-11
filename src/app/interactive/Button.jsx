export default function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 bg-white/40 text-black rounded-md shadow-md min-h-16 min-w-32 ${className}`}
    >
      {children}
    </button>
  );
}
