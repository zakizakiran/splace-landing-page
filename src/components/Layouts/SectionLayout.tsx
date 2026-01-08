const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative overflow-hidden mx-auto flex pt-12 lg:pt-24 max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12 text-center">
      {children}
    </section>
  );
};

export default SectionLayout;
