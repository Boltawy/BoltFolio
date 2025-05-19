export default function GlassContainer({ children }) {
  return (
    <>
      <div className="bg-white/10 backdrop-blur-md rounded-md shadow-md p-4 min-h-[200px] min-w-[400px]">
        {children}
      </div>
    </>
  );
}
