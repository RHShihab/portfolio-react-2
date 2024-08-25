const CustomSection = ({ className = "", style = {}, children }) => {
  return (
    <section className={`${className} relative`} style={style}>
      <div className="container px-8 xl:max-w-screen-xl mx-auto pb-24">
        {children}
      </div>
    </section>
  );
};

export default CustomSection;
