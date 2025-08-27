import React from "react";

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/bg.webp')" }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative flex flex-col space-y-6 items-center justify-center h-full">
          <h1 className="text-gray-300 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center flex items-center">
            Coming Soon
            <span className="ml-2 flex">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce [animation-delay:0.1s]">.</span>
              <span className="animate-bounce [animation-delay:0.2s]">.</span>
            </span>
          </h1>
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">MRM Reality</p>
      </div>
    </div>
  );
};

export default App;
