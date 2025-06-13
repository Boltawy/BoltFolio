export default function SubHeading({ children, sectionTag, className }) {
  return (
    <div className={"flex justify-between gap-6 items-baseline" + " " + className}>
      <h3 className="font-semibold  text-2xl text-gray-200/60 py-4 font-sriracha tracking-wider">
        {children}
      </h3>
      <h2
        className="text-gray-200/30 text-right -mb-[28px] text-lg pr-4 scroll-mt-6"
        id={sectionTag}
      >
        {sectionTag}
      </h2>
    </div>
  );
}
