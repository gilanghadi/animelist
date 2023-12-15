const Loader = () => {
  return (
    <div className="flex fixed top-0 left-0 right-0 bottom-0 z-50 justify-center items-center min-h-screen w-full">
      <div className="bg-primary absolute z-10 inset-0 opacity-50"></div>
      <span className="loader z-20"></span>
    </div>
  );
};

export default Loader;
