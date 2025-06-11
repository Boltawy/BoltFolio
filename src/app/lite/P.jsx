export default function P({ children, className = "", opacity = 100 }) {
  return (
    <p
      className={
        "pb-6 text-lg text-gray-300 " + "opacity-" + opacity + " " + className
      }
    >
      {children}
    </p>
  );
}
