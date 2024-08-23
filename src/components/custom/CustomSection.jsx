const CustomSection = ({ className = "", children }) => {
  return (
    <section className="relative">
      <div
        className={`${className} container px-8 xl:max-w-screen-xl mx-auto border-b border-neutral-800 pb-24`}
      >
        {children}
      </div>
    </section>
  );
};

export default CustomSection;
