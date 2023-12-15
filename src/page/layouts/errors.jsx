const ErrorLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-primary font-poppins">
      {children}
    </div>
  );
};

export default ErrorLayout;
