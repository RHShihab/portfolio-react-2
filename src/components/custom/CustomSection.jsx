const CustomSection = ({ className = "", children }) => {
  return (
    <section className="relative min-h-screen">
      <div
        className={`${className} container px-8 xl:max-w-screen-xl mx-auto pb-24`}
      >
        {children}
      </div>
    </section>
  );
};

export default CustomSection;
