export default function page() {
  return (
    <>
      <div className="bg relative -z-10">
        <div className="bg-[#141414] h-screen w-screen fixed inset-0"></div>
        <div className="bg-[url('/simple-bg.png')] h-screen w-screen fixed inset-0"></div>
      </div>
      <main className="inter px-[464px] py-32 text-gray-100">
        <h1 className=" font-semibold text-xl opacity-50 pb-2">BoltFolio</h1>
        <p>This is a simple version of my portfolio, For the full version</p>
      </main>
    </>
  );
}
