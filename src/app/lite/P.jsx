export default function P({ children, className = "", opacity = 100 }) {
  return (
    <p
      className={
        "pb-4 text-gray-200 " + "opacity-" + opacity + " " + className
      }
    >
      {children}
    </p>
  );
}
