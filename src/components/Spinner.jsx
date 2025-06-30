const Spinner = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 border-4
               border-black  text-blue-800
            border-dashed rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
