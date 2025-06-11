export default function BlockQuote({ children, className = "", opacity = 100 }) {
  return (
    <p
      className={
        "mb-6 text-base text-gray-200/50 italic border-l-2 p-2 pl-4 border-gray-200/50 bg-gray-200/[2%]" + " opacity-" + opacity + " " + className
      }
    >
      {children}
    </p>
  );
}
