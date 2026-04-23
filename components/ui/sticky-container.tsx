const StickyContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky z-25 lg:z-0 top-0 md:top-20 -mx-6 w-screen bg-white/50 lg:bg-transparent px-6 py-5 backdrop-blur lg:backdrop-blur-none md:-mx-12 md:px-12 lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
      {children}
    </div>
  );
};

export default StickyContainer;
